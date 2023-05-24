# Configuring a Heroku Review App to use another apps database

In certain scenarios, I've found it useful to use our production app's Read Replica as a source for manual testing. It's not something I'm reaching for often but there are definitely cases where our seed data just doesn't cut it.

Since it's a read replica, no writes can be made to it and I don't have to worry (too much) about harming production. You'll want to make sure any external user operations aren't configured to happen automatically (e.g. sending email, cropping avatars, etc).

## Destroy

In order to assign a different `DATABASE_URL` to a review app, you'll need to destroy the postgres attachment on your review app. I knock this out by chaining some commands together:

<!-- truncate -->

```bash
heroku addons:destroy $(heroku addons:info heroku-postgresql -a your_review_app | grep '===' | awk '{print $2}') -a your_review_app
```

The sub-command here is getting the name of the add-on (e.g. postgresql-concentric-04442) and passing it to `heroku addons:destroy`.[^1]

## Configure

Now that we've gotten rid of that pesky, old database, we can set the `DATABASE_URL` on our review app. I also have a banger of a command for this:

```bash
heroku config:set DATABASE_URL="$(heroku config:get HEROKU_POSTGRESQL_PURPLE_URL -r production)" -a your_review_app
```

In order to know what to substitute in for `HEROKU_POSTGRESQL_PURPLE_URL` in your setup, run:[^2]
```bash
heroku pg:info -r production | grep Followers 
```
Use your discretion to determine your read-replica.

## Relish

That's it. In my case, my app was rebooted and it read the `DATABASE_URL` without a problem. If your app tries to do writes, it will most likely throw an exception.

[^1]:	Of course, don't put your production app's name in this one. 😂😱

[^2]:	Assuming you're using a read replica from Heroku

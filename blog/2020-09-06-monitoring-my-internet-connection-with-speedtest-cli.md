# Monitoring my Internet Connection with Speedtest-cli

I wanted to log my internet's upload and download speeds over time. `brew search speed` turned up `speedtest-cli` which uses speedtest.net servers to measure what I was interested in.

Unfortunately it's a one time test and if you want it to repeat, you'll need to automate it. I chose a simple shell `while` loop to handle this for me[^1]:

```bash
while; do
  speedtest-cli --json --server $(
    speedtest-cli --list |
    grep -E "CenturyLink|Sprint|Enid|OneNet|Cox|Suddenlink" |
    head -20 |
    cut -f 1 -d ')' |
    sort -R | head -1
  ) | tee -a speedtest-log.json
  sleep 600
  clear
done
```

This checks a random nearby server every 10 minutes.

<!-- truncate -->

The `$(...)` subshell is what finds a random server (`speedtest-cli` outputs in order of distance). The `grep` limits it to internet providers I've heard of[^2]. `tee` outputs to stdout as well as a log file so I can see the results without having to `tail` the json log.

I run this in a tmux session dedicated to monitoring my internet (I run 2ping, mtr, and httping here as well).

The results are append to the log as one test run per line so it's a little terse to read. I may end up writing a Sinatra app to display the results in a more human readable format.

[^1]:	I don't recommend running this on a laptop as you may forget about it when you tether to your phone's data plan.
[^2]: Feel free to adjust this to your preference.

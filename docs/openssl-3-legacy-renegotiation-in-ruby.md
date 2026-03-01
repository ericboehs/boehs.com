# Allowing OpenSSL 3's Legacy Renegotiation in Ruby

In certain _interesting_ scenarios, you may need to disable OpenSSL 3's Legacy Renegotiation. In my case, I was running [Ruby's setup-ruby GitHub Action](https://github.com/ruby/setup-ruby) on a self-hosted runner (running Ubuntu). 
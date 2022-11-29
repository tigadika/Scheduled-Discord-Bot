## Discord Bot with Scheduled Message

This is an example of how you can accomplish to make a scheduled message using `Discord Bot` and `node-cron`

> `Cron` is one of the popular utility that provide some form of job scheduler or automation code

Tech stack used in this example:
- express (server framework)
- axios (HTTP client)
- [node-cron](https://www.npmjs.com/package/node-cron) (Cron-job scheduling)
- dotenv (environment variable)

### Working with discord bot

In this example, we are using [Discord Developer Portal](https://discord.com/developers/docs/intro) documentation which allow us to create Discord Bot & Application along with its permission (wether to just sending message or change user role) with ease. Just follow along the official documentation intro.

Then, we use axios as a HTTP client to make a request to Discord Bot endpoint (make sure that the Bot is added to your server).

Read more:
- [How to create your first App & Bot](https://discord.com/developers/docs/getting-started)
- [Example of how to create message docs](https://discord.com/developers/docs/resources/channel#create-message)

### Working with Cron Job in general

Working with `node-cron` or any package that utilized any form of Cron Job is relatively easy, if we know the standarized `unix-cron string format`.

The standard time fields is going to be like this:
```js
'* * * * *'
```
each star `'*'` represent a _Minute_, _Hour_, _Day of the Month_, _Month_, and _Day of the Week_ respectively, and we can change it to suit our needs.

Read more:
- [IBM's Unix Cron format docs](https://www.ibm.com/docs/en/db2oc?topic=task-unix-cron-format)
- [Configure Cron Job schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules)
- [Crontab.guru: a simple cron schedule expression editor](https://crontab.guru/)


Hope this helps!
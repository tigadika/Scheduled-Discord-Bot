require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const axios = require('axios');
const cron = require('node-cron');
app.use(express.json())

const baseUrl = `https://discord.com/api/v10`
const channelId = `target channel id`
const targetRoleId = `fill to mention any role in the channel`
const targetUserId = `fill to mention any user in the channel`

//? Schedule: Every-day of the week from Mon - Fri at 08.55
cron.schedule('55 08 * * 1-5', async () => {
  try {
    await axios({
      method: 'POST',
      url: baseUrl + `/channels/${channelId}/messages`,
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
      data: {
        "content": `Halo <@&${targetRoleId}>\nLecture Pagi akan dimulai **5 menit** lagi\nTopic: **OOP**\n==========================`,
        tts: false
      }
    })
    
    res.status(200).json({
      message: "Message delivered"
    })
  } catch(err) {
    res.status(err.response.status).json({
      message: err.response.data.errors,
      code: err.response.data.code
    })
  }
})

//? testing endpoint to make sure message is already correct before scheduling
app.get("/test", async (req, res) => {
  try {
    await axios({
      method: 'POST',
      url: baseUrl + `/channels/${channelId}/messages`,
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
      data: {
        content: `Halo <@${targetUserId}> with role <@&${targetRoleId}>`,
        tts: false,
      }
    })
    
    res.status(200).json({
      message: "Message delivered"
    })
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
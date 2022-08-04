exports.run = {
   usage: ['apkmody','apkmodydl'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {  
      if (command == 'apkmody') {
      // if (!text) return client.reply(m.chat,'no text', m)
        let json = await scrap.apkmody(text)
        let rows = [] 
        json.data.title.map((v, i) => rows.push({
            title: '📘 ' + v,
            rowId: `${isPrefix}apkmodydl ` + json.data.link[i],
            description: '乂 A P K M O D Y '
        }))              
      await client.sendList(m.chat, '', `乂 A P K M O D Y  `, '', 'Tap!', [{
         rows
      }], m)               
      }

       // devbookdl  
      if (command == 'apkmodydl') {
         let json = await scrap.apkmodydl(text)
        // client.sendFile(m.chat, json.data.img , '', '', m)  
        // client.sendFile(m.chat, json.data.link , 'INSTAGRAM : @wox_bella ', '', m)  
         client.reply(m.chat,json.data.content , m)
       }
   },
   error: false,
   limit: true,
   group: true,
   cache: true,
   location: __filename
}

exports.run = {
   usage: ['menu','mo3jam','apkgoogle','apkgoogledl'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
      
     
     
     
     // ________________________________________________
     
     
     if (command == 'start') {
       
       client.reply(m.chat, `.menu`, m)
         client.sendFile(m.chat, 'https://github.com/mohamedBella2000/xr/blob/master/media/image/Morphine.mp3?raw=true', 'MED.mp3', '', m, {
               document: false
          })
       
      }
      
      // urbn 
      if (command == 'mo3jam') {
       
       client.reply(m.chat, ` ... `, m)
      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
      let json = await scrap.mo3jam(text)
      command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
      }
      
      // urbn 
      if (command == 'apkgoogle') {
       
       client.reply(m.chat, ` جاري التحميل| تابعني على الانستغرام Instagram.com/wox_bella `, m)
      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
      let json = await scrap.apkgoogle(text)
     //  command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
         let rows = [
                      {
                        title: json.data.title[0],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[0],
                        description: 'follow me on instagrm : wox_bella'
                     },
                    {
                        title: json.data.title[1],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[1],
                        description: 'follow me on instagrm : wox_bella'
                     },
                     {
                        title: json.data.title[2],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[2],
                        description: 'follow me on instagrm : wox_bella'
                     },
                     {
                        title: json.data.title[3],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[3],
                        description: 'follow me on instagrm : wox_bella'
                     },
                      {
                        title: json.data.title[4],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[4],
                        description: 'follow me on instagrm : wox_bella'
                     },
                     {
                        title: json.data.title[5],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[5],
                        description: 'follow me on instagrm : wox_bella'
                     },
                      {
                        title: json.data.title[6],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[6],
                        description: 'follow me on instagrm : wox_bella'
                     },
                      {
                        title: json.data.title[7],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[7],
                        description: 'follow me on instagrm : wox_bella'
                     },
             {
                        title: json.data.title[8],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[8],
                        description: 'follow me on instagrm : wox_bella'
                     },
             {
                        title: json.data.title[9],
                        rowId: `${isPrefix}apkgoogledl ` + json.data.content[9],
                        description: 'follow me on instagrm : wox_bella'
                     }
         ]
                     
                     await client.sendList(m.chat, '', `乂  *A P K  G O O G L E*\n\n`, '', 'Tap!', [{
                        rows
                     }], m)
      }
      
       // apkgoogledl 
      if (command == 'apkgoogledl') {
       
       client.reply(m.chat, ` apkgoogledl ... `, m)
      let json = await scrap.apkgoogledl(text)
       client.sendFile(m.chat, json.data.content , json.data.title + '.apk', '', m)
      //client.reply(m.chat, json.data.content, m)
      }
   },
   error: false,
   limit: true,
group: true,
   cache: true,
   location: __filename
}



         

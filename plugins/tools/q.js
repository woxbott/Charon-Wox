exports.run = {
   usage: ['q'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
      try {
         
         
         let json = await scrap.hespress()
         let rows = [] 
         json.data.title.map((v, i) => rows.push({
             title: '📁 ' + v,
             rowId: `${isPrefix}hespresslink ` + json.data.link[i],
             description: '🚩 follow me on instagram : wox_bella'
         }))              
         await client.sendList(m.chat, '', `乂  *h e s p r e s s*\n\n`, '', 'Tap!', [{
            rows
         }], m) 
         
         
      } catch (e) {
         client.reply(m.chat, `🚩 Can't load message.`, m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}

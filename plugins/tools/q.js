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
             title: 'π ' + v,
             rowId: `${isPrefix}hespresslink ` + json.data.link[i],
             description: 'π© follow me on instagram : wox_bella'
         }))              
         await client.sendList(m.chat, '', `δΉ  *h e s p r e s s*\n\n`, '', 'Tap!', [{
            rows
         }], m) 
         
         
      } catch (e) {
         client.reply(m.chat, `π© Can't load message.`, m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}

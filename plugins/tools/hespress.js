exports.run = {
   usage: ['hespress'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
      

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
     


   },
   error: false,
   limit: true,
group: true,
   cache: true,
   location: __filename
}



         

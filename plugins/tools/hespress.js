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
             title: 'π ' + v,
             rowId: `${isPrefix}hespresslink ` + json.data.link[i],
             description: 'π© follow me on instagram : wox_bella'
         }))              
         await client.sendList(m.chat, '', `δΉ  *h e s p r e s s*\n\n`, '', 'Tap!', [{
            rows
         }], m) 
     


   },
   error: false,
   limit: true,
group: true,
   cache: true,
   location: __filename
}



         

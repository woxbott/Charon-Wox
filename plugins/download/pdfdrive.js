exports.run = {
   usage: ['pdfdrive','pdfdrivedl','pdfdrivedl2'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => { 
      
   /*
   ============================[ PDFDRIVE SEARCH ]============================
  */
      if (command == 'pdfdrive'){
         let json = await scrap.PDFDRIVESEARCH(text)
               let rows = [] 
               json.data.title.map((v, i) => rows.push({
                   title: '📁 ' + v,
                   rowId: `${isPrefix}pdfdrivedl ` + json.data.link[i],
                   description: '🚩 follow me on instagram : wox_bella'
               }))              
               await client.sendList(m.chat, '', `乂   P D F   D R I V E   S E A R C H \n\n`, '', 'Tap!', [{
                  rows
               }], m)
      }
  /*
   ============================[ PDFDRIVE DOWNLOAD PAGE]============================
  */
       if (command == 'pdfdrivedl'){
         let json = await scrap.PDFDRIVEDOWNLOAD(text) 
         
               client.sendFile(m.chat, json.data.img[0],'', '', m)
          
               let rows = [] 
               json.data.title.map((v, i) => rows.push({
                   title: '📁 ' + v,
                   rowId: `${isPrefix}pdfdrivedl2 ` + json.data.link[i],
                   description: 'C O N F I R M   DL'
               })) 
                
               await client.sendList(m.chat, '', `乂  *C O N F I R M   DL*\n\n`, '', 'Tap!', [{
                  rows
               }], m)
      }
      
  /*
   ============================[ PDFDRIVE DOWNLOAD PDF]============================
  */
       if (command == 'pdfdrivedl2'){
         let json = await scrap.PDFDRIVEDOWNLOAD2(text) 
         // client.sendFile(m.chat, json.data.img[0],'', '', m)
          client.reply(m.chat, json.data.link[0], m)
      }
      
      
                           
   },
   error: false,
   limit: true,
   group: true,
   cache: true,
   group: true,
   location: __filename
}

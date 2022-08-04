const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
global.creator = `@wox_bella`

module.exports = class Scraper {
   /*
   ===========================  apkgoogle  ===========================
   */
    apkmody(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://apkmody.io/?s=' + q)).data
            let $ = cheerio.load(html)
            let link = []
            let title = []
            $('.flex-container .flex-item a').each((i, e) => link.push($(e).attr('href')))
            $('.flex-container .flex-item a').each((i, e) => title.push($(e).attr('aria-label')))
            
            if (link.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: link,
                  title: title,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   
   /*
   ======= apkgoogledl
   */
    apkmodydl(url){
      return new Promise(async (resolve, reject) => {
         try {
            let id = url.replace('https://apkmody.io','') // /apps/youtube-music 
            let dl_link = 'https://download.apkmody.fun' + id + '/download/0'
            let html = await (await axios.get(dl_link)).data
            let $ = cheerio.load(html)
            let content = []
            //let title = []
            $('a#download-button').each((i, e) => content.push($(e).attr('href')))
            // $('div.short-detail h3').each((i, e) => title.push($(e).text()))
 
            if (content.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content,
                 // title: title[0].trim(),
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   
  /*
   ============================[ hespress 24h ]============================
  */
    hespress() {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.hespress.com/')).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('.h24-b ul li a').each((i, e) => title.push($(e).attr('title')))
            $('.h24-b ul li a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }  
   
   /*
   ======= apkgoogle ============
   */
    apkgoogle(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://apkgoogle.org/fr/?s=' + q)).data
            let $ = cheerio.load(html)
            let content = []
            let title = []
            $('a.sidebar-a').each((i, e) => content.push($(e).attr('href')))
            $('a.sidebar-a').each((i, e) => title.push($(e).attr('title')))
 
            if (content.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content,
                  title: title,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   
   /*
   ======= apkgoogledl
   */
    apkgoogledl(url){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get( url + '')).data
            let $ = cheerio.load(html)
            let content = []
            let title = []
            $('p.gt-block strong a').each((i, e) => content.push($(e).attr('href')))
             $('div.short-detail h3').each((i, e) => title.push($(e).text()))
 
            if (content.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content[0],
                  title: title[0].trim(),
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
 /*
   ============================[ PDFDRIVE SEARCH ]============================
  */
    PDFDRIVESEARCH(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.pdfdrive.com/search?q=' + q + '&more=true')).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('div.file-right a.ai-search').each((i, e) => link.push($(e).attr('href')))
            $('div.file-right a.ai-search h2').each((i, e) => title.push($(e).text()))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
 
 
  /*
   ============================[ PDFDRIVE DOWNLOAD ]============================
  */
    PDFDRIVEDOWNLOAD(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.pdfdrive.com/' + url)).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            let img = []
            $('div.ebook-right h1.ebook-title').each((i, e) => title.push($(e).text()))
            $('a#download-button-link').each((i, e) => link.push($(e).attr('href')))
            $('img.ebook-img').each((i, e) => img.push($(e).attr('src')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
                  img: img,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
 
 
 
 
 
  /*
   ============================[ PDFDRIVE DOWNLOAD 2 ]============================
  */
    PDFDRIVEDOWNLOAD2(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.pdfdrive.com/' + url)).data
            await new Promise(resolve => setTimeout(resolve, 15000));
            let $ = cheerio.load(html)
            await new Promise(resolve => setTimeout(resolve, 15000));
            let link = []
            $('div.mt-2 div.text-center div.btn-group a.btn-primary.btn-user').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
   /*
   ======= getlanglist cour
  */
    book(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.booksfree.org/?s=' + q)).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('div.td-pb-span12 div.item-details h3 a').each((i, e) => title.push($(e).attr('title')))
            $('div.td-pb-span12 div.item-details h3 a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
 
 
 bookpgver(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get(url)).data
            let $ = cheerio.load(html)
            let img = []
            let link = []
            $('img.lazyloaded').each((i, e) => img.push($(e).attr('src')))
            $('center a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  img: img,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
 
 
 
 /*
   ======= getlanglist cour
   */
    playlist(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get(url)).data
            let $ = cheerio.load(html)
            let title = []
           // let link = []
           // let description = []
            $('a#video-title').each((i, e) => title.push($(e).attr('title')))
           // $('ul.ul-timeline li.category-u a').each((i, e) => link.push($(e).attr('href')))
           // $('ul.ul-timeline li.category-u a').each((i, e) => description.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                 // link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }    
   
   /*
   ======= getlanglist cour
   */
    devbooks() {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://books.goalkicker.com/')).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('div.books div.bookContainer').each((i, e) => title.push($(e).text().trimStart()))
            $('div.books div.bookContainer a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }  
   
   
  /*
   ======= getlanglist cour
   */
    devbookdl(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://books.goalkicker.com/' + q)).data
            let $ = cheerio.load(html)
            let img = []
            let link = []
            $('div#frontpage a').each((i, e) => link.push($(e).attr('href')))
            $('div#frontpage a img').each((i, e) => img.push($(e).attr('src')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: 'https://books.goalkicker.com/' + q + link,
                  img: 'https://books.goalkicker.com/' + q + img,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }  
   
   /*
   ======= getlanglist cour
   */
    moutamadris() {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://moutamadris.ma/cours/')).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('div.entry-content li a').each((i, e) => title.push($(e).text().trimStart()))
            $('div.entry-content li a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }  
   
   
   
/*
   ======= getlanglist cour
   */
    moutamadris_mawad_list(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get(url)).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('div.entry-content div.mawad li.mada a').each((i, e) => title.push($(e).text().trimStart()))
            $('div.entry-content div.mawad li.mada a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
   
   
   
   /*
   ======= getlanglist cour
   */
    moutamadris_doross_list(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get(url)).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('div.entry-content li.medium-8.column p').each((i, e) => title.push($(e).text().trimStart()))
            $('div.entry-content li.medium-8.column a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
   

   /*
   ======= getlanglist cour
   */
    getcategory() {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.alloschool.com/category/morocco')).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('ul.ul-timeline li.category-u a').each((i, e) => title.push($(e).attr('title').trimStart()))
            $('ul.ul-timeline li.category-u a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }    
   

   /*
   ======= getlanglist cour
   */
    getcategory2(url) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get(url)).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            let bigtitle = []
            $('ul.ul-timeline a.t').each((i, e) => title.push($(e).attr('title').trimStart()))
            $('ul.ul-timeline a.t').each((i, e) => link.push($(e).attr('href')))
            $('.category-u div.t-h h2').each((i, e) => bigtitle.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
                  bigtitle: bigtitle,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   
   /* section
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   
   alloschool(q){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.alloschool.com/search?q=' + q)).data
            let $ = cheerio.load(html)
            let category = []
            let link = []
            let title = []
            $('div.row ul.list-unstyled li a').each((i, e) => link.push($(e).attr('href')))
            $('div.row ul.list-unstyled li a').each((i, e) => title.push($(e).text().trimStart()))
            $('span.badge').each((i, e) => category.push($(e).text().trimStart()))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: link,
                  title: title,
                  category: category,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   
   
   
   
   /*
   ======= getlanglist cour
   */
    getlanglist() {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.alloschool.com/category/physical-science')).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('ul.ul-timeline li a div.t-h h2').each((i, e) => title.push($(e).text().trimStart()))
            $('ul.ul-timeline li a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
 
     /*
   ======= 
   */
lesson(url){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get( url + '')).data
            let $ = cheerio.load(html)
            let link = []
            let title = []
            $('li.lesson').each((i, e) => link.push($(e).attr('id').replace('sections-','')))
             $('li.lesson .t-h  h2').each((i, e) => title.push($(e).text().trimStart()))
           
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: link,
                  title: title,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   
   
   /* section
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   
   section(q){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.alloschool.com/section/' + q)).data
            let $ = cheerio.load(html)
            let link = []
            let title = []
            $('div.row .er').each((i, e) => link.push($(e).attr('href')))
             $('div.row .er').each((i, e) => title.push($(e).text().trimStart()))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: link,
                  title: title,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   
   /* section
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   
   pdfdl(url){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get(url)).data

            let $ = cheerio.load(html)
            let dl_link = []
           // let yt_link = []
            $('.pdf-tag-hide a').each((i, e) => dl_link.push($(e).attr('href')))
           // $('a.ytp-impression-link').each((i, e) => yt_link.push($(e).attr('href')))
    
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  dl_link: dl_link,
                 // yt_link: yt_link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   /* Chat AI
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   chatAI = (bid, key, text) => {
      return new Promise(async (resolve) => {
         try {
            let json = await (await axios.get('http://api.brainshop.ai/get?bid=' + bid + '&key=' + key + '&uid=neoxr&msg=' + encodeURI(text))).data
            if (typeof json.cnt == 'undefined') return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               cretor: global.creator,
               status: true,
               msg: json.cnt
            })
         } catch (e) {
            console.log(e)
            return resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   /* URL Shortener
    * @param {String} url
    */
   shorten = (url) => {
      return new Promise(async (resolve) => {
         try {
            let params = new URLSearchParams()
            params.append('url', url)
            let json = await (await fetch('https://s.nxr.my.id/api', {
               method: 'POST',
               body: params
            })).json()
            if (json.error) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  url: 'https://s.nxr.my.id/r/' + json.data.code
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   /* Image Uploader (telegra.ph)
    * @param {Buffer} buffer
    */
   uploadImage = async (buffer) => {
      let {
         ext
      } = await fromBuffer(buffer)
      let form = new FormData
      form.append('file', buffer, 'tmp.' + ext)
      let res = await fetch('https://telegra.ph/upload', {
         method: 'POST',
         body: form
      })
      let img = await res.json()
      if (img.error) throw img.error
      return 'https://telegra.ph' + img[0].src
   }
}

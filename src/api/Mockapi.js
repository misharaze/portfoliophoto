//import Portrait from "../img/Work/portrait1.jpeg"
//import Portrait2 from "../img/Work/Portrait2.jpeg"
//import Portrait3 from "../img/Work/portrait1.jpeg"
//import Portrait4 from "../img/Work"


const sleep = (ms) => new Promise(r => setTimeout(r, ms))


export async function fetchGallery() {
    await sleep(300)
  
    return [
      // Portrait
      { id: 1, title: "Portrait 1", src: "https://www.slrlounge.com/wp-content/uploads/2018/10/brittany-smith-canon-portrait-slr.jpg", category: "portrait" },
      { id: 2, title: "Portrait 2", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mzTTcmtnGBgdYS6SRXqQ_6_oYy7l33VjM3aS2fH0EaFTZPeNIyE5-XCw9kq0nIutsG8&usqp=CAU", category: "portrait" },
      { id: 3, title: "Portrait 3", src: "https://i.pinimg.com/236x/f7/27/bc/f727bc623ee3a16192eb75acd6616753.jpg", category: "portrait" },
      { id: 4, title: "Portrait 4", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiL3ljj81s6ApgEd9i0Jsg788SQFswv6B2WRdS1jizA5_Lc5iCf6p1iJjY7UvbaA0G7E&usqp=CAU", category: "portrait" },
  
      // Wedding
      { id: 5, title: "Wedding 1", src: "https://cdn.media.amplience.net/i/canon/canon-pro-wedding-photography-equipment-bokeh-1-1140?$og-image$", category: "wedding" },
      { id: 6, title: "Wedding 2", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonISZYkRN8mZSGPacwjO95xliihB-LW1G_Q&s", category: "wedding" },
      { id: 7, title: "Wedding 3", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtitjdN_IVSAPwl7VcTrjTWq5o-q8SHdLW3MoHkCSomolK1O8oaEouX1mItdLTRolQfAM&usqp=CAU", category: "wedding" },
      { id: 8, title: "Wedding 4", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnEvYvWi2jBgdEtcU58c10E9HWSMl_KRF6g&s", category: "wedding" },
  
      // Editorial
      { id: 9, title: "Editorial 1", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9axZJT36eAJIo2SUGDkgn-UKwGajFyxUFw&s", category: "editorial" },
      { id:10, title: "Editorial 2", src: "https://images.pexels.com/photos/27902336/pexels-photo-27902336/free-photo-of-fashion-editorial-portrait.jpeg", category: "editorial" },
      { id:11, title: "Editorial 3", src: "https://images.pexels.com/photos/28219830/pexels-photo-28219830.jpeg?cs=srgb&dl=pexels-taylen-hippolyte-324311719-28219830.jpg&fm=jpg", category: "editorial" },
      { id:12, title: "Editorial 4", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_AQ_uUuSnBlT-HQ56E-CbssU_KrKn6M7JfpZ9IUlijt_95Cj53vcC7R9uI9Y_rgkGLY&usqp=CAU", category: "editorial" },

      { id: 13, title: "Interiors 1", src: "https://victoriagibbs.com/wp-content/uploads/2023/07/1stimagetop-1.jpg", category: "Interiors" },
      { id:14, title: "Interiors 2", src: "https://www.shayvelich.com/wp-content/uploads/2019/04/Hotel-and-Resort-Photographer-1.jpg", category: "Interiors" },
      { id:15, title: "Interiors 3", src: "https://www.shayvelich.com/wp-content/uploads/2019/04/Interior-Design-Photographer-3-1536x1024.jpg", category: "Interiors" },
      { id:16, title: "Interiors 4", src: "https://www.dereknielsen.com/wp-content/uploads/2023/04/river-of-eden-unframed-900x675.jpg", category: "Interiors" },

      { id: 17, title: "Landscape", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMJ3AW12IBZx_e99POW9eurA8LJ2xkTcYfA&s", category: "landscape" },
      { id: 18, title: "Landscape", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89wmD_fIAgowTknID6PKSNuVvPw8NzGK7cvCDOIrN0OSAr5xo7Q7IgnDOsw3S2YFtjmk&usqp=CAU", category: "landscape" },
      { id: 19, title: "Landscape", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0BLvP63c0zt4JmkrD6kbrK-zYvK5V7CMUqM0P-6GrqApt6LSCpKKVrh4AZWpWDRwYQs&usqp=CAU", category: "landscape" },
      { id: 20, title: "Landscape", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJR9Czb5u8A62L1MJx-jLU4N8KDLumNAZtK0O4kOVc-MItS0hflfZ81wQMBrB3mSU92I&usqp=CAU", category: "landscape" },
  
      // Wedding
      { id: 21, title: "Event", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9xfN-q_5ET6a_h1qEIvhF7kOnkrR3uz59Yg&s", category: "Event" },
      { id: 22, title: "Event", src: "https://media.macphun.com/img/uploads/macphun/blog/2408/1LightsCameraMusicLearnHowToPhotographConcerts.jpg?q=75&w=1710&h=906&resize=cover", category: "Event" },
      { id: 23, title: "Event", src: "https://www.picturecorrect.com/wp-content/uploads/2015/07/concert-photography-2.jpg", category: "Event" },
      { id: 24, title: "Event", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvP9Q5j98XYMnLICEUJuTrZa637Kz9LTRgHjBYxOtFcJ5R9qLmNutOh8qdsaigwsQ8X8&usqp=CAU", category: "Event" },
  
      // Editorial
      { id: 25, title: "Animals", src: "https://learn.zoner.com/wp-content/uploads/2021/09/sometimes-youre-crawling-around-on-the-floor-with-the-dog-or-trying-to-get-the-dogs-attention-using-all-sorts-of-sounds-misa-mala-and-eliska-hruzova-agre.jpg", category: "Animals" },
      { id: 26, title: "Animals", src: "https://images.squarespace-cdn.com/content/v1/5dfb89c85175f548802f6f16/1739546448239-LQFSWED6DD22XLKN2TX9/Chocci+2.jpg", category: "Animals" },
      { id: 27, title: "Animals", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8opgVQ2KjCKJV2lxZMHZHkNwlgbA32BtiW9C9m9lFtRAPjpMe1B4QKGUv5qRJGiAdp8&usqp=CAU", category: "Animals" },
      { id: 28, title: "Animals", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVkOoFUQpcQ_Du_JObD7rADoG7bb1GgldoE2fPDe0y5cQI49f_JDo-iSZC1tfQAg0UR8&usqp=CAU", category: "Animals" },

      { id: 29, title: "Family", src: "https://brookeelisabethphotography.com/wp-content/uploads/2023/12/fall-family-photo.jpg", category: "Family" },
      { id: 30, title: "Family", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFQzS8wCUupVbdYcszoYd6dP5NWM_K9fxsC78iWlgs6PNN6mk8CzU82BZX9SCJTNiWZM&usqp=CAU", category: "Family" },
      { id: 31, title: "Family", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTEG14TfE7xrrdIRHLKA_e8TGjG8mE_6oEVhhMSksHUg5TGljXsFsl9_lc_hVeeE507U&usqp=CAU", category: "Family" },
      { id: 32, title: "Family", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdv-cQJVSeighDGVbT9a-5FxRqnqrqLhd06A&s", category: "Family" }


    ]

  }
  


export async function submitContact(form) {
    await sleep(300)
    return { ok: true, id: Math.floor(Math.random()*10000) }
    }
    
    
    export async function fetchBookings() {
    await sleep(200)
    return [
    { id: 'b1', client: 'Anna', date: '2025-12-02', status: 'confirmed', notes: '' },
    { id: 'b2', client: 'Mark', date: '2025-12-10', status: 'pending', notes: '' }
    ]
    }
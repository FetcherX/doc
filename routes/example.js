const express = require('express')
const router = express.Router()
const RSS = require('rss')
const hostname = `https://docs.fetcherx.com/example`

let feedOption = {
    title: 'RSSX-APP Example',
    site_url: 'https://fetcherx.com',
    generator: 'RSSX-app',
    image_url: 'https://res.cloudinary.com/dekkjw7le/image/upload/v1551305021/logo2.png',
    custom_namespaces: {
        'FetcherX': 'https://fetcherx.com'
    }
}

router.get('/', async (req, res)=>
{
    let feed = new RSS(Object.assign({}, feedOption, 
    {
        custom_elements: [
            { 'FetcherX:nav': [{ name: 'Webpage' }, { link: `${hostname}/webpage` }, { type: 'application/rss+xml' }] },
            { 'FetcherX:nav': [{ name: 'Videos' }, { link: `${hostname}/videos` }, { type: 'application/rss+xml' }] },
            { 'FetcherX:nav': [{ name: 'Photos' }, { link: `${hostname}/photos` }, { type: 'application/rss+xml' }] },
            { 'FetcherX:nav': [{ name: 'Bookmark' }, { link: `bookmark-pliGU5ORy` }, { type: 'app/fetcherx_bookmark' }] },
            { 'FetcherX:search': `${hostname}/search` }
        ]
    }))
    
    res.set({ 'Content-Type': 'application/xml' }).end(feed.xml())
})

router.get('/photos', async (req, res)=>
{
    var pageMap = {
        '0': [   
            { title: '[application/rss+xml] Gallery', enclosure: { url: `${hostname}/gallery` , type: 'application/rss+xml' }, custom_elements: [ { 'FetcherX:thumb': 'https://fetcher-cdn.nullmu.com/images/8b187a45e3d7227838b4eb75c699c195' } ]},
            { title: '[app/fetcherx_bookmark] ', custom_elements: [ { 'FetcherX:thumb': 'https://res.cloudinary.com/dekkjw7le/image/upload/v1551296645/bookmark.png' } ], enclosure: { url: `bookmark-Fa-US379O` , type: 'app/fetcherx_bookmark' }},
            { title: '[app/instagram] Apple on Instagram', custom_elements: [ { 'FetcherX:thumb': 'https://fetcher-cdn.nullmu.com/images/3f7a198c53ebce0ce24d0bde2459b387.jpg' } ], enclosure: { url: `apple` , type: 'app/instagram' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/d907779a2e713f05a40a3c4603cead8d' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/2a6f10ea068c63d6b822421cb86a06eb' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/80deaccfeb2a5fc2da677f398c392f50' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/0112339771de48d65c0e5ac9965ebdbc' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/ac98dc373575b8b356ae58ad6e431779' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/c61fc336e6b11bd38c3e468c3954e52d' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/aff644eceecd7e22eacc3656da1f1176' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/bbb867b4856af8e12a8edfbfee5a9a6a' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/302b5297e9d5bccbe1f0f5e4b3452194' , type: 'image/jpeg' }},
        ],
        '1': [
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/6c6134826dc9805ddd3adab99b1fc10d' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/b7819a3b9639afa0b11f7ff6ca4c645f' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/4c21c68c76f8a113e3d6b5f7287b96e2' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/595ad3c1288906ee8efb8b8dc69ede45' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/484363d38f1816853742f74eae2fc478' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/034b539316d23569e00d7ee16ed15725' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/5394f4ae88734494d9e5beac735d5fd8' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/b2022a2633e5a8f6b7bb17e38d0f38d4' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/3d104b317c0627658d5738b4858fc911' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/f2cd0cd84fd1e1b7b6577324aa5be504' , type: 'image/jpeg' }},
        ],
        '2': [
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/0af7e800b5aa932b5f27ef7a1056294b' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/7d40bd6fdf765c798c37dc881691049b' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/bac81a9d3076fa079f0ccc416656db24' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/e4184d0ec8ad1dad53858f97aa1cecde' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/d10150916cc18860667b05f831868c9c' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/58ddb8fa16b9cdda526cd3bd16426341' , type: 'image/jpeg' }},
            { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/59195e1d94015c00580852b880644344' , type: 'image/jpeg' }},
        ]
    }

    let page = parseInt(req.query.page || 0)
    let feed = new RSS(Object.assign({}, feedOption, page < 2 ? {
        custom_elements: [
            { 'FetcherX:next_page': `${hostname}/photos?page=${page+1}` }
        ]
    }:{}))

    pageMap[page+''].forEach(item=>{
        feed.item(item)
    })
    
    res.set({ 'Content-Type': 'application/xml' }).end(feed.xml())
})

router.get('/gallery', async (req, res)=>
{
    let feed = new RSS(feedOption);
    
    [   
        { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/8b187a45e3d7227838b4eb75c699c195' , type: 'image/jpeg' }},
        { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/e38ae810d82dadf1ec29844f16344c98' , type: 'image/jpeg' }},
        { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/ab519d65b81f558a5bc39a5787550384' , type: 'image/jpeg' }},
        { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/5ba6225fcfeff4a74329333f4c82407c' , type: 'image/jpeg' }},
        { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/975833eb2978690ff48dfd6780c29b17' , type: 'image/jpeg' }},
        { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/f85854152d8ef12437a4af252f0d302f' , type: 'image/jpeg' }}
    ].forEach(item=>{
        feed.item(item)
    })
    
    res.set({ 'Content-Type': 'application/xml' }).end(feed.xml())
})

router.get('/webpage', async (req, res)=>
{
    let feed = new RSS(feedOption);
    
    [   { enclosure: { url: 'http://time.com/5534388/' , type: 'text/html' }},
        { enclosure: { url: 'https://www.youtube.com/watch?v=d9IxdwEFk1c' , type: 'text/html' }},
        { enclosure: { url: 'https://edition.cnn.com/travel/article/grand-canyon-national-park-100-anniversary/index.html' , type: 'text/html' }},
        { enclosure: { url: 'https://www.theverge.com/2019/2/26/18234492/overwatch-baptiste-hero-reveal' , type: 'text/html' }},
        { enclosure: { url: 'http://time.com/5454739/best-movies-2018/' , type: 'text/html' }},
        { enclosure: { url: 'https://parade.com/855831/nicolepajer/things-you-didnt-see-on-tv-at-the-oscars/' , type: 'text/html' }}
    ].forEach(item=>{
        feed.item(item)
    })
    
    res.set({ 'Content-Type': 'application/xml' }).end(feed.xml())
})

router.get('/videos', async (req, res)=>
{
    let feed = new RSS(feedOption);

    [   
        { 
            title: '[app/youtube] IU Official Channel', 
            custom_elements: [ { 'FetcherX:thumb': 'https://fetcher-cdn.nullmu.com/images/32469b68c9eae48fae06822adb85f6fe' } ],
            enclosure: { url: `UC3SyT4_WLHzN7JmHQwKQZww` , type: 'app/youtube' }
        },
        { 
            title: '[video/mp4] Hey Google, get me ready for HQ.',
            custom_elements: [ { 'FetcherX:thumb': 'https://fetcher-cdn.nullmu.com/images/fc25354e5aa3cb645782d78849614dce.jpg' } ],
            enclosure: { url: 'https://video.twimg.com/tweet_video/DzOyw3MV4AAZMTz.mp4' , type: 'video/mp4' }
        },
        { 
            title: '[video/html] The Music Scene',
            custom_elements: [ { 'FetcherX:thumb': 'https://i.vimeocdn.com/video/71155337_1280x720.jpg' } ],
            enclosure: { url: 'https://player.vimeo.com/video/12622016' , type: 'video/html' }
        },
        { 
            title: '[video/mp4] what happens when your spaceship gets an attitude?',
            custom_elements: [ { 'FetcherX:thumb': 'https://fetcher-cdn.nullmu.com/images/48c0c215e568028fada93f40fef96bd2.jpg' } ],
            enclosure: { url: 'https://video.twimg.com/amplify_video/1099437212653871104/vid/1280x720/f6rr-xG69J49T7i7.mp4' , type: 'video/mp4' }
        },
        { 
            title: '[video/html] [MV] IU(아이유) _ BBIBBI(삐삐)',
            custom_elements: [ { 'FetcherX:thumb': 'https://i.ytimg.com/vi/nM0xDI5R50E/maxresdefault.jpg' } ],
            enclosure: { url: 'https://www.youtube.com/embed/nM0xDI5R50E' , type: 'video/html' }
        },
        { 
            title: '[video/html] Choreographing Dubai\'s giant fountain',
            custom_elements: [ { 'FetcherX:thumb': 'https://cdn.cnn.com/cnnnext/dam/assets/141030130257-fountains-dubai-story-tablet.jpg' } ],
            enclosure: { url: 'https://fave.api.cnn.io/v1/fav/?video=travel/2019/02/14/global-gateway-dubai-fountain-design-lon-orig.cnn&customer=cnn&env=prod' , type: 'video/html' }
        }
    ].forEach(item=>{
        feed.item(item)
    })
    
    res.set({ 'Content-Type': 'application/xml' }).end(feed.xml())
})

router.get('/search', async (req, res)=>
{
    let feed = new RSS(feedOption);

    [
        { 
            title: `[Search ${req.query.s}] The Music Scene`,
            custom_elements: [ { 'FetcherX:thumb': 'https://i.vimeocdn.com/video/71155337_1280x720.jpg' } ],
            enclosure: { url: 'https://player.vimeo.com/video/12622016' , type: 'video/html' }
        },
        { enclosure: { url: 'https://fetcher-cdn.nullmu.com/images/59195e1d94015c00580852b880644344' , type: 'image/jpeg' }},
        { 
            title: `[Search ${req.query.s}] what happens when your spaceship gets an attitude?`,
            custom_elements: [ { 'FetcherX:thumb': 'https://fetcher-cdn.nullmu.com/images/48c0c215e568028fada93f40fef96bd2.jpg' } ],
            enclosure: { url: 'https://video.twimg.com/amplify_video/1099437212653871104/vid/1280x720/f6rr-xG69J49T7i7.mp4' , type: 'video/mp4' }
        },
        { 
            title: `[Search ${req.query.s}] [MV] IU(아이유) _ BBIBBI(삐삐)`,
            custom_elements: [ { 'FetcherX:thumb': 'https://i.ytimg.com/vi/nM0xDI5R50E/maxresdefault.jpg' } ],
            enclosure: { url: 'https://www.youtube.com/embed/nM0xDI5R50E' , type: 'video/html' }
        }
    ].forEach(item=>{
        feed.item(item)
    })
    
    res.set({ 'Content-Type': 'application/xml' }).end(feed.xml())
})

module.exports = router;

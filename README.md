
# Api Youtube Downloader

Esta API tem a funcionalidade de mostrar detalhes e baixar vídeos do youtube, o usuário ao informar uma query 'url' com o link do vídeo do youtube, como resposta recebe um json mostrando os detalhes do vídeo e links para baixar o vídeo.


## Instalação

Para rodar o projeto é necessário ter o Node JS instalado e rodar os comando abaixo:

```bash
  npm install
  npm run start
```
    
## Documentação da API

#### Retorna todos os itens

```http
  GET /
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `url` | `string` | **Obrigatório**. Url do vídeo do Youtube |

#### Retorna um JSON

```http
  {
    "status": true,
    "type": "video",
    "id": "a4eszeLtQag",
    "title": "NOTÍCIAS BIZARRAS, CONFUSAS E ENGRAÇADAS #31",
    "description": "Neste vídeo vou trazer uma coletânea de notícias bizarras, confusas e engraçadas que já foram noticiadas pela internet e jornais, pode ser fake? Pode, por que algumas são beeeem duvidosas kkkkkkkkkkkk\nDentre elas estão: cidade chinesa vai multar quem errar a pontaria ao urinar em  banheiros, homem tatua marca de mordida da mãe na perna, homem desenvolve chifre de 10 centímetros na cabeça, noiva descobre durante casamento que sogra é, na verdade a mãe dela.\n\nQuer me mandar algo?\nCaixa Postal: 4301 - Cep: 69085-972\nManaus / AM\n\n🔔 Ativem o sininho para receber as notificações de vídeos novos!",
    "channel": {
        "type": "channel",
        "id": "UCKGh3pCuK1TNLrsKNZVahVA",
        "name": "The Foca",
        "isVerified": true,
        "isVerifiedArtist": false,
        "avatar": [
            {
                "url": "https://yt3.ggpht.com/ytc/APkrFKZ7NoioGyUd04JK4DjWGojLtLCT_ziSvMlSdYsv=s48-c-k-c0x00ffffff-no-rj",
                "width": 48,
                "height": 48
            },
            ...
        ]
    },
    "lengthSeconds": 502,
    "viewCount": 23107,
    "publishedTimeText": "Oct 8, 2023",
    "isLiveStream": false,
    "isLiveNow": false,
    "isRegionRestricted": false,
    "thumbnails": [
        {
            "url": "https://i.ytimg.com/vi/a4eszeLtQag/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAyR1o-Dt7aZGAuzW8vcV8Fiznxpw",
            "width": 168,
            "height": 94
        },
        ...
    ],
    "videos": {
        "status": true,
        "expiration": 1696835101,
        "items": [
            {
                "url": "https://redirector.googlevideo.com/videoplayback?expire=1696835101&ei=vVEjZZHcHo2VsfIPqpK5iAc&ip=209.141.44.95&id=o-AIAu7D-RFD3jweOP4SKRT_CaOdMONM8sIyj0p3yIVc5q&itag=18&source=youtube&requiressl=yes&mh=FE&mm=31%2C26&mn=sn-o097znzr%2Csn-a5meknd6&ms=au%2Conr&mv=m&mvi=5&pl=22&initcwndbps=85000&siu=1&vprv=1&svpuc=1&mime=video%2Fmp4&ns=1C3WCmlSDGPx-0pk5dj3l_kP&gir=yes&clen=18643589&ratebypass=yes&dur=502.061&lmt=1696720969457044&mt=1696813036&fvip=3&fexp=24007246&beids=24350018&c=WEB&txp=6319224&n=tHmgQt8l61Jq3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Csiu%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AGM4YrMwRgIhAIAnt8mTrxllgLSdDoEqG_oZuyGu5Tvk_rx27NTzAduxAiEAziw42mQEGoSEpMTRNrzwOKGdujUSOcgGmqpaZUMm3LQ%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AK1ks_kwRgIhAKSDcNBioaAC0_M3Qh2qlyJMFSZSv4PZ6b4EWLy9JrVTAiEA4XYUXIdaF4kfzjIvBuhaK_7c21VFbJpzkgkUu_rnftU%3D&range=0-",
                "lengthMs": 502061,
                "mimeType": "video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
                "extension": "mp4",
                "lastModified": 1696720969457044,
                "size": 18643589,
                "sizeText": "17.8MB",
                "hasAudio": true,
                "quality": "360p",
                "width": 640,
                "height": 360
            },
            ...
        ]
    },
    "subtitles": {
        "status": true,
        "expiration": 1696838701,
        "items": [
            {
                "url": "https://www.youtube.com/api/timedtext?v=a4eszeLtQag&ei=vVEjZZHcHo2VsfIPqpK5iAc&caps=asr&opi=112496729&xoaf=4&hl=en&ip=0.0.0.0&ipbits=0&expire=1696838701&sparams=ip,ipbits,expire,v,ei,caps,opi,xoaf&signature=8612DC99F6EE208FC2FB379CA2086B570A255014.9911CFFF5FE7A1999565CBF90F4ACB886F7C5462&key=yt8&kind=asr&lang=pt",
                "code": "pt",
                "text": "Portuguese (auto-generated)"
            }
        ]
    },
    "related": {
        "nextToken": "video-related.CBQSDRILYTRlc3plTHRRYWcYACqLBjJzNkw2d3pCQkFxLUJBb0Q4ajRBQ2czQ1Bnb0k1b2VibWNpVG85OWlDZ1B5UGdBS0RzSS1Dd2lKdHNDNWdydUl5WnNCQ2dQeVBnQUtEc0ktQ3dqZXJJV1J4LWZ3NXY0QkNnUHlQZ0FLRHNJLUN3akN0clBRX3Uyem1PY0JDZ1B5UGdBS0RjSS1DZ2ppbXU3eHdJYU9nWDRLQV9JLUFBb053ajRLQ1BicjlLRHUyTXlpUEFvRDhqNEFDZzNDUGdvSWhaMmd0ckx0anZVc0NnUHlQZ0FLRHNJLUN3amI5NWIwcmMyLXllVUJDZ1B5UGdBS0RjSS1DZ2pZd3FuOHg3ZUttVGNLQV9JLUFBb093ajRMQ0oyNnVlRFZrNEdtaUFFS0FfSS1BQW9Pd2o0TENKdmxqcUxSaUxmUXNBRUtBX0ktQUFvT3dqNExDT0Mxc1B5WGl2dTJxZ0VLQV9JLUFBb053ajRLQ0pubmlLbWhwYVBlRXdvRDhqNEFDZzNDUGdvSTJLYmZpY3E0M2ROQkNnUHlQZ0FLRHNJLUN3amt3WnVEM2ZHQzdyVUJDZ1B5UGdBS0RjSS1DZ2ktNGJ5X3pOSzAyUkVLQV9JLUFBb093ajRMQ0tfR3laZXNqdTNObXdFS0FfSS1BQW9Pd2o0TENMTFo5c0xLd3ZfdjFnRUtBX0ktQUFvTndqNEtDTUdsenRtUDZ2NlVEUW9EOGo0QUNnM0NQZ29JZ2NPYjNJTHU5ZnBTRWhRQUFnUUdDQW9NRGhBU0ZCWVlHaHdlSUNJa0pob0VDQUFRQVJvRUNBSVFBeG9FQ0FRUUJSb0VDQVlRQnhvRUNBZ1FDUm9FQ0FvUUN4b0VDQXdRRFJvRUNBNFFEeG9FQ0JBUUVSb0VDQklRRXhvRUNCUVFGUm9FQ0JZUUZ4b0VDQmdRR1JvRUNCb1FHeG9FQ0J3UUhSb0VDQjRRSHhvRUNDQVFJUm9FQ0NJUUl4b0VDQ1FRSlJvRUNDWVFKeW9VQUFJRUJnZ0tEQTRRRWhRV0dCb2NIaUFpSkNZag93YXRjaC1uZXh0LWZlZWQ=.xXM6Xw5LBmcvSuqC-RJXbFBrQAvk8cZO0g7aLnZwjq4",
        "items": [
            {
                ...
            }
        ]
    }
}

```
## Stack utilizada

**Back-end:** Node, Express, Axios


## 🚀 Sobre mim
Eu sou uma desenvolvedor full-stack, Node JS, React JS, PHP e etc.

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)



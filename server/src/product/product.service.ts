import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  createBulkProducts() {
    let data = [
      {
        display_name: 'Netflix',
        display_name_ko: '넷플릭스',
        message: '넷플릭스 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A6%E1%86%BA%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%A8%E1%84%89%E1%85%B3+inner1.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/TQLAawsFEN.png',
        category: 'video',
        total_likes: 0,
        url: 'https://www.netflix.com/kr',
        demo: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Watcha',
        display_name_ko: '왓챠',
        message: '왓챠 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%AA%E1%86%BA%E1%84%8E%E1%85%A3+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/xazlZQviV1.png',
        category: 'video',
        total_likes: 0,
        url: 'https://watcha.com',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Youtube',
        display_name_ko: '유튜브',
        message: '유튜브 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%84%90%E1%85%B2%E1%84%87%E1%85%B3+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/VYFz026D5l.png',
        category: 'video',
        total_likes: 0,
        url: 'https://www.youtube.com/premium',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Wavve',
        display_name_ko: '웨이브',
        message: '웨이브 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B0%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/D48URKpxNV.png',
        category: 'video',
        total_likes: 0,
        url: 'https://www.wavve.com',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Tving',
        display_name_ko: '티빙',
        message: '티빙 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%90%E1%85%B5%E1%84%87%E1%85%B5%E1%86%BC+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/sDSq2faVsC.png',
        category: 'video',
        total_likes: 0,
        url: 'https://www.tving.com',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Laftel',
        display_name_ko: '라프텔',
        message: '라프텔 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A1%E1%84%91%E1%85%B3%E1%84%90%E1%85%A6%E1%86%AF+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/1NV5YLChVa.png',
        category: 'video',
        total_likes: 0,
        url: 'https://laftel.net',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Disney Plus',
        display_name_ko: '디즈니 플러스',
        message: '디즈니 플러스 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%82%E1%85%B5+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/moJRkdc6iF.png',
        category: 'video',
        total_likes: 0,
        url: 'http://www.disneyplus.com',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Apple TV Plus',
        display_name_ko: '애플티비 플러스',
        message: '애플티비 플러스 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A2%E1%84%91%E1%85%B3%E1%86%AF%E1%84%90%E1%85%B5%E1%84%87%E1%85%B5+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/PdsxbyQGDJ.png',
        category: 'video',
        total_likes: 0,
        url: 'https://www.apple.com/kr/apple-tv-plus',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Millie',
        display_name_ko: '밀리의 서재',
        message: '밀리의 서재 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%B4%E1%84%89%E1%85%A5%E1%84%8C%E1%85%A2+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/Y7dBzslC5x.png',
        category: 'book',
        total_likes: 0,
        url: 'https://millie.co.kr/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Ridi Select',
        display_name_ko: '리디셀렉트',
        message: '리디셀렉트 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%B5%E1%84%83%E1%85%B5%E1%84%89%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3+inner.jpeg',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/cl4oQFH5Nq.png',
        category: 'book',
        total_likes: 0,
        url: 'https://select.ridibooks.com',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Kyobo sam',
        display_name_ko: '교보sam',
        message: '교보sam 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AD%E1%84%87%E1%85%A9+inner.jpeg',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/w1ljwVgUtR.png',
        category: 'book',
        total_likes: 0,
        url: 'https://digital.kyobobook.co.kr/digital/ebook/ebookMain.ink',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'YesBook Club',
        display_name_ko: '예스북클럽',
        message: '예스북클럽 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%86%B8+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/8yBpKkLNGe.png',
        category: 'book',
        total_likes: 0,
        url: 'http://m.yes24.com/BookClub/Main',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Vibe',
        display_name_ko: '바이브',
        message: '바이브 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/FwwEpeKt69.png',
        category: 'music',
        total_likes: 0,
        url: 'https://vibe.naver.com/today',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Spotify',
        display_name_ko: '스포티파이',
        message: '스포티파이 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A9%E1%84%90%E1%85%B5%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/JjPSoEVs7h.png',
        category: 'music',
        total_likes: 0,
        url: 'https://www.spotify.com/kr-ko/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Apple Music',
        display_name_ko: '애플뮤직',
        message: '애플뮤직 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A2%E1%84%91%E1%85%B3%E1%86%AF%E1%84%86%E1%85%B2%E1%84%8C%E1%85%B5%E1%86%A8+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/eAiVAGjOGO.png',
        category: 'music',
        total_likes: 0,
        url: 'http://www.applemusic.co.kr/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Genie',
        display_name_ko: '지니',
        message: '지니 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%B5%E1%84%82%E1%85%B5+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/MVamdMFHC3.png',
        category: 'music',
        total_likes: 0,
        url: 'https://www.genie.co.kr/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Melon',
        display_name_ko: '멜론',
        message: '멜론 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A6%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/fuM0mtY8hZ.png',
        category: 'music',
        total_likes: 0,
        url: 'https://www.melon.com/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Flo',
        display_name_ko: '플로',
        message: '플로 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/3SpsfWTjUG.png',
        category: 'music',
        total_likes: 0,
        url: 'https://www.music-flo.com/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Coupang',
        display_name_ko: '쿠팡',
        message: '쿠팡 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A1%E1%86%BC+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/RrWF1yzE4r.png',
        category: 'shopping',
        total_likes: 0,
        url: 'https://www.coupang.com/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Kurly',
        display_name_ko: '마켓컬리',
        message: '마켓컬리 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1%E1%84%8F%E1%85%A6%E1%86%BA%E1%84%8F%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/pP5W3k3Wry.png',
        category: 'shopping',
        total_likes: 0,
        url: 'https://www.kurly.com/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Naver Plus',
        display_name_ko: '네이버플러스',
        message: '네이버플러스 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A5+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/I1fMT6lzML.png',
        category: 'shopping',
        total_likes: 0,
        url: 'https://nid.naver.com/membership/join?pcode=Naver_brandsearch_A',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Tmon',
        display_name_ko: '티몬',
        message: '티몬 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%90%E1%85%B5%E1%84%86%E1%85%A9%E1%86%AB+inner.jpeg',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/lFe1qosu6S.png',
        category: 'shopping',
        total_likes: 0,
        url: 'https://www.tmon.co.kr/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: '11st',
        display_name_ko: '11번가',
        message: '11번가 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/11%E1%84%87%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A1+inner.jpeg',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/zolteR9ICi.png',
        category: 'shopping',
        total_likes: 0,
        url: 'https://www.11st.co.kr/main',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Wisely',
        display_name_ko: '와이즐리',
        message: '와이즐리 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%AA%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/jgZDl957hu.png',
        category: 'life',
        total_likes: 0,
        url: 'https://wisely.wiselycompany.com/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Laundrygo',
        display_name_ko: '런드리고',
        message: '런드리고 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%85%E1%85%A5%E1%86%AB%E1%84%83%E1%85%B3%E1%84%85%E1%85%B5%E1%84%80%E1%85%A9+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/bNPcBAdPFK.png',
        category: 'life',
        total_likes: 0,
        url: 'https://www.laundrygo.com/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Sooldamhwa',
        display_name_ko: '술담화',
        message: '술담화 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%AF%E1%84%83%E1%85%A1%E1%86%B7%E1%84%92%E1%85%AA+inneer.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/XltGn3C9g6.png',
        category: 'life',
        total_likes: 0,
        url: 'https://www.sooldamhwa.com/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        display_name: 'Cleaninglab',
        display_name_ko: '청소연구소',
        message: '청소연구소 설명메세지',
        inner_image:
          'https://subllet-profile.s3.ap-northeast-2.amazonaws.com/%E1%84%8E%E1%85%A5%E1%86%BC%E1%84%89%E1%85%A9%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%AE%E1%84%89%E1%85%A9+inner.png',
        outer_image: 'https://i.esdrop.com/d/z3v0lj8ztjvc/u7CYggIkTv.png',
        category: 'life',
        total_likes: 0,
        url: 'https://www.cleaninglab.co.kr/',
        demo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    let category_ids = {
      video: 1,
      music: 2,
      life: 5,
      shopping: 3,
      book: 4,
      finance: 6
    };
    let newData = data.map((item) => {
      return {
        name: item.display_name.toLowerCase(),
        display_name_ko: item.display_name_ko,
        display_name: item.display_name,
        url: item.url,
        categoryId: category_ids[item.category],
      };
    });
    return this.productRepository
      .createQueryBuilder('product')
      .insert()
      .values(newData)
      .execute();
  }

  findOne(id: number) {
    return this.productRepository.findOne({id:id})
  }

  async createProduct(
    Product: Product
  ) {
    return await this.productRepository.save(Product)
  }

  findAll() {
    return this.productRepository.find()
  }
}

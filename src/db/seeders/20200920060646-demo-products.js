'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('Products', [
    {
      name: '노보텔 앰배서더 용산 - 서울 드래곤 시티',
      category: '숙박',
      price: '103500',
      uri: 'http://www.webtour.com/WebUpload/CMS/800/2020071321184559876302.JPG'
    },
    {
      name: '대한항공 제주찐특가',
      category: '제주',
      price: '120000',
      uri: 'https://image.hanatour.com/usr/manual/md/2020/06/PL00112519/bnr_co.jpg'
    },
    {
      name: '랜딩관 제주신화월드 호텔앤리조트',
      category: '제주 서귀포',
      price: '89900',
      uri: 'https://image.hanatour.com/usr/cms/resize/400_0/2020/04/09/280000/05af2f8b-3b66-4ca6-a1c4-928a1b9069b3.jpg'
    },
    {
      name: '제주도 효도여행 3일',
      category: '제주-패키지',
      price: '430000',
      uri: 'http://prism.webtour.com/WebUpload/GdsImg/DGJ002179/2019013116594349532680.jpg'
    },
    {
      name: '파크 하얏트 부산',
      category: '부산',
      price: '255802',
      uri: 'https://image.hanatour.com/usr/cms/resize/400_0/2020/04/08/490000/21021f00-3bff-4240-a47a-f0163d19d0a0.jpg'
    },
    {
      name: '스카이베이 경포 호텔',
      category: '강릉',
      price: '94665',
      uri: 'https://image.hanatour.com/usr/cms/resize/400_0/2020/03/27/120000/84fde9c6-08b6-409d-a924-d8d85f841b9f.jpg'
    },
    {
      name: '홍도/흑산도 ２박3일',
      category: '홍도/흑산도',
      price: '259000',
      uri: 'http://prism.webtour.com/WebUpload/GdsImg/DGI002235/2016091216270683160472.jpg'
    },
    {
      name: '롯데리조트속초',
      category: '속초',
      price: '161059',
      uri: 'https://image.hanatour.com/usr/cms/resize/400_0/2020/04/07/60000/3786c5ac-d210-4a64-83b0-e6c58d5b8ea8.jpg'
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Products', null, {});
  }
};

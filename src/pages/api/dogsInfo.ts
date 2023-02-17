const Animal = [
  {
    title: '스탠다드 푸들',
    animals: [
      {
        name: '슈슈',
        file: 'https://velog.velcdn.com/images/cjw960703/post/fc35c195-1975-4dfb-b583-782f9af89f6f/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'M',
        point: ['남자에요. 비숑쌍둥이아빠 아니에요', '#핵인싸견', '#사진찍고싶은사람', '#발들어']
      },
      {
        name: '망고',
        file: 'https://velog.velcdn.com/images/cjw960703/post/9f0f23b0-a0b8-4840-a8f2-e9364f598af7/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'W',
        point: ['여자에요. 공놀이를 좋아해요', '#프로탈출여왕', '#점프여왕']
      },
    ]
  },
  {
    title: '코카스파니엘',
    animals: [
      {
        name: '코코',
        file: 'https://velog.velcdn.com/images/cjw960703/post/27c42627-ac20-436b-93ce-92a660306253/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'W',
        point: ['사장님은 근육이라고 우기시는데 살입니다', '#원조식탐대마왕', '#살빠지면 꼬리로 날수도']
      },
    ]
  },
  {
    title: '보더콜리',
    animals: [
      {
        name: '로이',
        file: 'https://velog.velcdn.com/images/cjw960703/post/15e027a7-d220-4b55-a4b3-d8d9ab2b7229/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'M',
        point: ['탈출은 거들뿐.', '#프로탈출러', '#울타리넘는애', '#군기반장']
      },
    ]
  },
  {
    title: '보스턴테리어',
    animals: [
      {
        name: '뿌꾸',
        file: 'https://velog.velcdn.com/images/cjw960703/post/a67819e2-ff88-4c0d-9810-ee25e460df0e/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'M',
        point: ['내가 있을 곳은 내가 정한다', '#프로탈출러2', '#문여는애']
      },
    ]
  },
  {
    title: '비숑프리제',
    animals: [
      {
        name: '솜',
        file: 'https://velog.velcdn.com/images/cjw960703/post/93d27b70-0fb4-4cb4-985f-92859ecbf320/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'W',
        point: ['탈모? 난 그런거 몰라요', '#솜뭉치', '#털뚠뚠이', '#방콕구석콕']
      },
      {
        name: '목화',
        file: 'https://velog.velcdn.com/images/cjw960703/post/583e3d97-2d75-43e0-9173-25a5acee49b6/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'W',
        point: ['푸들 아니에요, 슈슈애기 아님', '#비숑', '#아빠따로있음', '#정말이에요']
      },
    ]
  },
  {
    title: '웰시코기',
    animals: [
      {
        name: '에디',
        file: 'https://velog.velcdn.com/images/cjw960703/post/3faeef19-2de7-4ce3-9df7-88514842e4b8/image.png',
        age: 6,
        birth: '2021-10-22',
        gender: 'M',
        point: ['형들은 문열어, 나 나가개', '#프로탈출러3', '#틈새시장', '#슬리퍼']
      },
    ]
  },
]

const Pomeranian = {
  title: '포메라니안',
  animals: {
    parentsDogs: [
      {
        name: '밤톨',
        file: 'https://velog.velcdn.com/images/cjw960703/post/0d338a60-ce17-468f-ab52-7b381fb352e3/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'M',
        point: ['애 안보고 바람피다 걸려서 땅콩수확', '#강제각성', '#더귀여워 대표미남']
      },
      {
        name: '폼폼',
        file: 'https://velog.velcdn.com/images/cjw960703/post/84830f64-b994-4593-98e1-5e801a8e379b/image.jpg',
        age: 6,
        birth: '2021-10-22',
        gender: 'W',
        point: ['애 낳기전엔 순했는데,,,(아련)', '#엄마는 강하다', '#세 자매 엄마', '#김연아 트리플 악셀']
      },
    ],
    childDogs: [
      {
        name: '자몽',
        file: 'https://velog.velcdn.com/images/cjw960703/post/d16ddb3d-1aa5-4492-80b0-289f6f77c7d6/image.jpg',
        age: 3,
        birth: '2021-10-22',
        gender: 'W',
        point: ['#요리뿅죠리뿅', '#뽀뽀대마왕']
      },
      {
        name: '버찌',
        file: 'https://velog.velcdn.com/images/cjw960703/post/72711264-9942-459b-9360-fb15160688b7/image.jpg',
        age: 3,
        birth: '2021-10-22',
        gender: 'W',
        point: ['#예민이', '#돼지포메', '#그만물어봐요', '#밤톨이 딸 맞음']
      },
      {
        name: '율무',
        file: 'https://velog.velcdn.com/images/cjw960703/post/1c77c139-bbc9-4407-b9b8-619f08e58685/image.png',
        age: 3,
        birth: '2021-10-22',
        gender: 'W',
        point: ['#최강 귀요미', '#엄마를 닮았네']
      }
    ]
  }
}

export { Animal, Pomeranian }
import { useRouter } from 'next/router';
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  const router = useRouter();
  return (
    <footer className={router.pathname ==='/' ? 'footer fixed' : 'footer'}>
      <div className="footer__container">
        <ul className='footer__flex'>
          <li>
            <div className={router.pathname === '/' ? 'icon active' : 'icon'}><IoHomeSharp /></div>
            홈
          </li>
          <li>
            <div className='icon'><HiLocationMarker/></div>
            지역
          </li>
          <li>
            <div className='icon'><MdMyLocation /></div>
            내주변
          </li>
          <li>
            <div className='icon'><BsHeartFill /></div>
            찜
          </li>
          <li>
            <div className='icon'><FaUser /></div>
            My
          </li>
        </ul>
        {/* <ul className="footer__left">
          <li>© 2022 PetAndBe, Inc.</li>
          <li>개인정보 처리방침</li>
          <li>이용약관</li>
          <li>사이트맵</li>
          <li>한국의 변경된 환불 정책</li>
          <li>회사 세부정보</li>
        </ul>
        <ul className='footer__right'>
          <li>한국어 (KR)</li>
          <li>₩</li>
          <li>KRW</li>
          <li>지원 및 참고 자료</li>
        </ul> */}
      </div>
      {/* <h4 className='footer__infos'>웹사이트 제공자: PetAndBe Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</h4> */}
      <style jsx>{`
        .footer__container {
          max-width: 700px;
          margin: 0 auto;
        }
        .footer__flex {
          display: flex;
          justify-content: space-around;
        }
        .footer__flex > li {
          flex-direction: column;
          display: flex;
          justify-self: center;
          cursor: pointer;
          align-items: center;
        }
        .footer__flex > li > .icon {
          font-size: 24px;
        }
        .footer__flex > li > .active {
          color: #FF385C;
        }
        // .footer__flex > li{
        //   color: #FF385C;
        // }
      `}</style>
    </footer>
  )
}

export { Footer };
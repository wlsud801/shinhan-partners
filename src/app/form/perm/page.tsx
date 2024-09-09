'use client';
import Image from 'next/image';
import React from 'react';
import close from '../../../../public/close.png';
import { useRouter } from 'next/navigation';

function Perm() {
    const route = useRouter();
    return (
        <div className="p-7 bg-white min-h-[100vh]">
            <button className="float-right">
                <Image src={close} alt="닫기" width={17} height={17} onClick={() => route.back()} />
            </button>
            <h2 className="mt-7 mb-3">
                신한 파트너스 개인정보 수집 및 이용 동의 안내 <span>[필수]</span>
            </h2>
            <h3 className="text-sm font-bold mt-3 mb-1">제1조 (목적)</h3>
            <p className="text-sm">
                신한 파트너스(이하 &apos;회사&apos;라 함)는 개인정보 보호법 및 관련 법령을 준수하여 고객의 개인정보를
                보호합니다. 본 약관은 회사가 고객의 개인정보를 수집, 이용하는 방법 및 절차에 대한 안내를 목적으로
                합니다.
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제2조 (수집하는 개인정보의 항목)</h3>
            <p className="text-sm">
                회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다: <br />
                개인식별정보: 이름, 생년월일, 성별, 연락처(전화번호, 이메일 주소 등)
                <br />
                주소 및 기타 연락처 정보 <br />
                금융정보: 은행 계좌 정보, 카드 정보 등 <br />
                서비스 이용 기록: 접속 로그, 쿠키, IP 주소, 이용 기록 등
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제3조 (개인정보 수집 및 이용 목적)</h3>
            <p className="text-sm">
                회사는 수집한 개인정보를 다음과 같은 목적으로 이용합니다: <br />
                고객 서비스 제공 및 관리 금융 거래의 원활한 처리 <br />
                서비스 관련 안내 및 공지사항 발송 <br />
                고객 문의 및 불만 처리 맞춤형 서비스 제공 및 마케팅 자료 제공 <br />
                법적 요구 사항 및 규정 준수
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제4조 (개인정보의 보유 및 이용 기간)</h3>
            <p className="text-sm">
                회사는 개인정보를 수집 목적 달성 후에는 관련 법령에 따라 적법한 절차에 의해 개인정보를 파기합니다. 단,
                다음의 경우에는 개인정보를 보유합니다: <br />
                법령에 의해 보존이 필요한 경우 (예: 거래 기록, 계약서 등) 고객의 요청에 의해 보존이 필요한 경우
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제5조 (개인정보 제3자 제공)</h3>
            <p className="text-sm">
                회사는 고객의 개인정보를 제3자에게 제공하지 않습니다. 단, 다음의 경우에는 예외로 합니다: <br />
                법령에 의해 요구되는 경우 고객의 사전 동의를 받은 경우 계약의 이행을 위해 필요한 경우
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제6조 (개인정보 처리 위탁)</h3>
            <p className="text-sm">
                회사는 서비스 제공을 위해 개인정보 처리 업무를 외부 업체에 위탁할 수 있습니다. 이 경우, 위탁업체는
                개인정보 보호를 위한 계약을 체결하고, 위탁 업무가 종료되면 개인정보를 안전하게 파기하도록 합니다.
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제7조 (고객의 권리 및 행사 방법)</h3>
            <p className="text-sm">
                고객은 언제든지 본인의 개인정보에 대한 열람, 정정, 삭제, 처리 정지를 요구할 수 있습니다. 이러한 요구는
                고객센터를 통해 접수되며, 회사는 관련 법령에 따라 신속하게 처리합니다.
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제8조 (개인정보 보호책임자)</h3>
            <p className="text-sm">
                회사는 개인정보 보호를 위한 책임자를 두고 있으며, 개인정보와 관련된 문의는 아래의 연락처로 해주시면
                됩니다: <br />
                <br />
                개인정보 보호책임자 연락처 <br />
                이메일: [ziboorie@naver.com]
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제9조(약관의 변경)</h3>
            <p className="text-sm">
                회사는 본 약관을 변경할 수 있으며, 변경된 내용은 회사의 웹사이트에 공지하여 고객에게 알립니다. 약관 변경
                후 서비스 이용 시, 고객은 변경된 약관에 동의한 것으로 간주됩니다.
            </p>
            <h3 className="text-sm font-bold mt-3 mb-1">제10조 (기타) </h3>
            <p className="text-sm">본 약관에 명시되지 않은 사항은 관련 법령 및 회사의 개인정보 처리 방침에 따릅니다.</p>
        </div>
    );
}

export default Perm;

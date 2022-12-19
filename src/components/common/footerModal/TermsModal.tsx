import styled from '@emotion/styled'
import Modal from '../Modal'

const ModalTitle = styled.span`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;

  color: #000000;

  word-break: break-all;
`

const ModalSubTitle = styled.span`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  color: #000000;

  word-break: break-all;
`

const ModalContent = styled.span`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;

  color: #000000;

  word-break: break-all;
`

const TermsModal = ({ terms }: { terms: string }) => {
  return (
    <Modal modalOpen={terms === 'terms' ? true : false}>
      <ModalTitle>Terms of Use</ModalTitle>
      <ModalContent>
        <br />
        <br />
        <ModalSubTitle>METAGONZ</ModalSubTitle>
        <br />
        <br />
        Metagonz is an NFT, Metahuman, Avatar, and Metaverse project running on
        Ethereum Networks. The users (“owners”, “you”, "your”) who purchase or
        own Metagonz may use those in accordance with this “Terms of Use”, and
        the users are deemed to have agreed to use NFT of Metagonz under the
        conditions set out below.
        <br />
        <br />
        <ModalSubTitle>DEFINITIONS</ModalSubTitle>
        <br />
        <br />
        “NFT'' stands for Non-Fungible Token, which is a unique digital
        identifier existing on a blockchain network.
        <br />
        <br />
        "Metagonz" is a digital art collection and NFT project that exists on
        the Ethereum network in the form of NFT.
        <br />
        <br />
        The term “Company” or “We” means Metaplayers Inc. which operates the
        Metagonz project.
        <br />
        <br />
        "Secondary copyright work" and “Derivative Work” mean any creative works
        produced by means of translation, arrangement, alteration,
        dramatization, cinematization, etc. of an original work. However, mere
        copies of an Art or any alterations that do not actually change the Art
        do not constitute Derivative Works.
        <br />
        <br />
        <ModalSubTitle>OWNERSHIP</ModalSubTitle>
        <br />
        <br />
        You completely own Metagonz NFT when you purchase an NFT successfully.
        Ownership of the NFT is mediated entirely by the Smart Contract on the
        Ethereum Network, and the company can not seize, restrict, or modify the
        ownership of any Metagonz that you own. Ownership of Metagonz is limited
        to the NFT you purchase successfully, and it does not apply to other
        Metagonz owned by other users or the company.
        <br />
        <br />
        <ModalSubTitle>LICENSE OF THE DIGITAL ART</ModalSubTitle>
        <br />
        <br />
        For as long as you lawfully own your Metagonz NFT, and subject to your
        compliance with the terms of this License, we hereby grant you the
        following rights:
        <br />
        <br />
        1. You can use your own Metagonz for personal and non-profit purposes,
        such as using it as your profile picture or displaying it to social
        media.
        <br />
        <br />
        2. You can purchase and sell your NFT in a marketplace that
        cryptographically encrypts and validates each owner's "digital work"
        exhibition rights associated with Metagonz.
        <br />
        <br />
        If you want to exercise an authority not listed above, you must get in
        touch with the company and get our permission first. The following
        rights are not granted to you.
        <br />
        <br />
        1. The logo, product and service name, design and slogan of Metagonz,
        including Metagonz NFT, are our trademarks. You only have the right to
        transfer the entire production issued by us, and the right to commercial
        use of our trade name and logo is entirely with the company.
        <br />
        <br />
        2. You are not permitted to use the Metagonz NFT Art in any way that
        constitutes unlawful, defamatory, harassing, abusive, fraudulent,
        racist, hateful, vulgar, cruel, illegal or obscene activity, or that
        promotes any such activity.
        <br />
        <br />
        It is not allowed to produce and commercially use secondary and
        derivative works. Examples of commercial use include the use of
        derivative arts for your own project, producing and selling goods using
        derivative works.
        <br />
        <br />
        <ModalSubTitle>FEES AND PAYMENT</ModalSubTitle>
        <br />
        <br />
        Metagonz's transactions run on the Ethereum network. We have no control
        over the Ethereum network. We are not responsible for any loss or damage
        that may occur as a result of such transactions and cannot be canceled
        or refunded in connection with transactions occurring on the Ethereum
        network.
        <br />
        <br />
        In the process of purchasing an NFT, the user will pay a transaction fee
        (or gas fee) to use the Ethereum network in addition to the NFT price
        specified during the Metagonz purchase process.
        <br />
        <br />
        <ModalSubTitle>DISCLAIMERS AND RISK ASSUMPTION</ModalSubTitle>
        <br />
        <br />
        1. You agree that you do not claim and object to any risks and
        consequences arising from transactions with third parties other than us.
        <br />
        <br />
        2. You are aware of and agree with the negative impact of price changes
        associated with Metagonz. NFT purchases should not be considered an
        investment, and Metagonz is not a security and financial investment
        product under the Capital Markets Act and the Financial Investment
        Business Act.
        <br />
        <br />
        3. You accept and agree that there are risks associated with the use of
        Ethereum-based blockchain technology in NFT transactions. This refers to
        all negative consequences and factors arising from transactions on the
        Ethereum network, including risk of NFT access loss due to private key
        loss, archival or buyer error, risk of mining or blockchain attacks,
        risk of hacking and security vulnerability, risk of token taxation,
        risk, risk of privacy, uninsured loss, and volatility.
        <br />
        <br />
        4. All documents related to Metagonz do not guarantee accuracy,
        authenticity, stability, reliability or completeness. In no event shall
        we be liable for any kind of loss or damage arising from reliance on
        relevant documents and information from the Metagonz Project.
        <br />
        <br />
        5. The transaction of Metagonz takes place on the Ethereum network. We
        are not responsible for any refund or compensation for damages caused by
        problems with the Ethereum platform and consequences of all risks
        arising from smart contracts on the Ethereum network. We acknowledge and
        agree that you are fully responsible for the above.
        <br />
        <br />
        6. NFT, digital assets, and blockchain technologies are relatively new,
        and regulations on them are unclear. New regulations can negatively
        impact blockchain technology, which can negatively impact the value of
        your Metagonz. You understand and agree to take all risks.
        <br />
        <br />
        <ModalSubTitle>ADDITIONAL PROVISIONS</ModalSubTitle>
        <br />
        <br />
        1. The company may change these terms of use at its discretion. These
        terms and conditions will be updated continuously on the website, and
        you are requested to periodically check if there are any changes to
        these terms. We do not have separate membership procedures and do not
        collect your personal information, so we cannot notify you separately.
        <br />
        <br />
        2. Changes to these terms of use shall be announced in the manner of
        paragraph (1) from 7 days before the application date to the day before
        the application date along with the current terms of use, specifying the
        application date and the reason for revision. However, if you change
        important regulations on your rights or obligations, you will be
        notified 30 days before the application date.
        <br />
        <br />
        3. If you continue to access or use the website after the terms of use
        have been updated, you will be deemed to have accepted the changed terms
        of use. If you do not agree to the amended terms of use, you will not be
        able to access or use this website.
        <br />
        <br />
        <ModalSubTitle>JURISDICTION AND GOVERNING LAW</ModalSubTitle>
        <br />
        <br />
        These Terms of Use (including, but not limited to, products sold or
        distributed through your website, access and use of NFT, or through the
        website) are governed by and applied in accordance with the laws of the
        Republic of Korea. In addition, the designation of the competent court
        for disputes related to this condition of use shall be made by the
        competent court under the Civil Procedure Act.
        <br />
        <br />
        <br />
        <br />
        Metagonz®. Registered trademarks of Meta Player Inc. © 2022 Meta Player
        Inc. A
      </ModalContent>
    </Modal>
  )
}

export default TermsModal

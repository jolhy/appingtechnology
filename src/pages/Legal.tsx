import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";

const Legal = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy & EULA | Apping Technology"
        description="Read Apping Technology's privacy policy and end user licence agreement (EULA). Learn how we collect, use, and protect your personal data."
        keywords="privacy policy, EULA, Apping Technology legal, data protection, terms of service"
        canonical="/legal"
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-14 md:py-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Legal</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl text-foreground mb-4">
                Privacy Policy & <span className="text-primary">EULA</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Your privacy matters to us. Please review our policies below.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">

                  {/* Privacy Policy */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-foreground">Apping Privacy Policy</h2>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">Introduction to the policy</h3>
                  <p>This Cloud Privacy Policy (also referred to as the 'Privacy Policy') provides data on the collection, use, and sharing (collectively referred to 'processing' or 'process') as of private data by CLOUD and its affiliates ("Cloud", "we" or "us") in reference to your use of Apping's websites, mobile applications, and social media pages that link to the present Privacy Policy, your interactions with us throughout in-person meetings at our facilities or at events, and within the context of alternative on-line or offline sales and promoting activities. This Privacy Policy also explains the privacy rights you've got in regard to these process activities.</p>
                  <p>The Privacy Policy will be amended over time, for example to go with legal necessities or to fulfill ever-changing business wants. The foremost up-to-date version is found on this web site. Just in case there's a crucial amendment that we want you to focus on, we'll additionally inform you in another applicable method (for example via a pop-up notice or statement of changes on our website). As stated in this Privacy Policy, 'personal information' or 'personal data' means that information that relates to a known individual or to a recognizable individual. For instance, this shall include among different things like your name, address, email address, business contact details, or data gathered through your interactions with us via our websites or at events. Personal data is additionally mentioned as 'information about you.'</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">Information we will collect from you</h3>
                  <p>Most of the private information we tend to collect is directly provided by our users after they register and use our services. Alternative information is collected by recording interactions with our services. Specific items of data regarding you that Cloud could collect and process depending on your interaction with Cloud, includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>name and physical address, email addresses, and contact numbers;</li>
                    <li>demographic attributes, once tied to personal data that identifies you;</li>
                    <li>photographs that determine you and testimonials;</li>
                    <li>transactional information, together with products and services ordered, monetary details and payment methods;</li>
                    <li>company information like the name, size and location of the company you're employed for and your role inside the company similarly as publically accessible company data and activity related to company data;</li>
                    <li>data from surveys conducted by Cloud or by third parties on behalf of Cloud and publicly accessible data, like social media posts;</li>
                    <li>call recording and chat transcript information from Sales and client support calls and live chat sessions or interviews;</li>
                    <li>unique IDs like your mobile device identifier or cookie ID on your browser;</li>
                    <li>IP address and data which will be derived from IP address, like geographic location;</li>
                    <li>information about a device you are using, like browser, device type, operating system, the presence or use of "apps", screen resolution, and also the preferred language used by you;</li>
                    <li>certain location or geolocation data you provide directly or through automated means that, if you decide on to enable location primarily based services from your device; and</li>
                    <li>Behavioral information of the internet connected pc or device you use once interacting with the sites, like advertisements clicked or viewed, sites and content areas, date and time of activities or the online search used to locate and navigate to a site.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">Use of your personal data by us</h3>
                  <p>We could use personal data for the subsequent business purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>to communicate and reply to your requests and inquiries;</li>
                    <li>to interact in transactions with customers, suppliers and business partners and to process the orders for Cloud items and services;</li>
                    <li>to analyze, develop, improve and optimize the use, function and performance of our sites and products and services;</li>
                    <li>to manage the safety and operation of our sites, facilities, and networks and systems; and</li>
                    <li>To comply with applicable laws and rules and to control our business.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">Cookies</h3>
                  <p>Cookies are the small text files which are sent by the website you are opening to the pc or any other device you are using. If accepted, these cookies are kept on the online browser of your device. Cookies will then track and collect information from your browser, causing that information back to the web site owner.</p>
                  <p>We use cookies and different technologies on all our sites to confirm the simplest possible and secure experience on our sites and to supply you with tailored data on products and services.</p>
                  <p>We uses cookies or similar technologies on its sites to gather online data like your mobile device ID, IP address, and different data regarding your device, similarly as behavioral data of your device usage on our sites</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">How we treat your information</h3>
                  <p>We know how important and sensitive your personal information is, Cloud has enforced appropriate technical, physical and organizational measures designed to shield personal data against accidental or unlawful destruction or accidental loss, damage, alteration, unauthorized disclosure or access, similarly as all other sorts of unlawful process.</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">Your rights</h3>
                  <p>If you've got any complaints relating to our compliance with this Privacy Policy, please contact us initially. We'll investigate and arrange to resolve complaints and disputes relating to use and disclosure of private data in accordance with this Privacy Policy and in accordance with applicable law.</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">Contacting us</h3>
                  <p>Apping's corporate headquarter is located at A4-8, Level 4, Block A, Plaza Dwitasik, Jalan 5/106, Bandar Sri Permaisuri, 56000 Kuala Lumpur, Malaysia.</p>
                  <p>Please contact us via email at <a href="mailto:legal@appingtechnology.com" className="text-primary hover:underline">legal@appingtechnology.com</a></p>

                  {/* Divider */}
                  <hr className="my-12 border-border" />

                  {/* EULA */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 !text-foreground">EULA</h2>
                  <p className="!text-muted-foreground italic mb-6">Apping Technology Subscription Agreement Note: Version 2 – 2022-07-05</p>
                  <p>By subscribing to the Apping Technology services (the "Services") provided by Apping Technology, hosted on Apping Technology's Cloud platforms (the "Cloud Platform") , you (the "Customer") are agreeing to be bound by the following terms and conditions (the "Agreement").</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">1. Term of the agreement</h3>
                  <p>The duration of this Agreement (the "Term") shall be specified in writing on the conclusion of this Agreement, beginning on the date of conclusion. It is automatically renewed for an equal Term, unless either party provides a written notice of termination minimum 30 days before the end of the Term to the other party.</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">2. Definitions</h3>
                  <p><strong>"User"</strong> any user account indicated as active in the Software, with access to creation and/or edition mode. Deactivated user accounts and accounts used by external people (or systems) who only have limited access to the Software through the portal facilities (known as "portal Users") are not counted as Users.</p>
                  <p><strong>"App"</strong> an "App" is a specialized group of features available for installation in the Software.</p>
                  <p><strong>"Extra module"</strong> An extra module is a directory of source code files, or a set of Python-based customizations created in a database, that adds features or changes the standard behavior of the Software. It may have been developed by Apping Technology.</p>
                  <p><strong>"Covered extra module"</strong> A Covered Extra Module is an Extra Module for which the Customer chooses to pay a maintenance fee in order to get support, upgrade and bug fixing services. Bug Is considered a Bug any failure of the Software or of a Covered Extra Module that results in a complete stop, error traceback or security breach, and is not directly caused by a defective installation or configuration. Non-compliance with specifications or requirements will be considered as Bugs at the discretion of Apping Technology (typically, when the Software does not produce the results or performance it was designed to produce, or when a country-specific feature does not meet legal accounting requirements anymore).</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">3. Access to the Software</h3>
                  <p>The Customer can use the Software hosted on the Apping Technology Cloud Platform. The Cloud Platform is hosted and fully managed by Apping Technology, and accessed remotely by the Customer. For the duration of this Agreement, Apping Technology gives the Customer a non-exclusive, non-transferable license to use the Apping Technology Edition software. The Customer agrees to take all necessary measures to guarantee the unmodified execution of the part of the Software that verifies the validity of the Apping Technology Edition usage and collects statistics for that purpose, including but not limited to the running of an instance, the number of Users, the installed Apps, and the number of lines of code of Covered Extra Modules. Apping Technology commits not to disclose individual or named figures to third parties without the consent of the Customer, and to deal with all collected data in compliance with its official Privacy Policy. Upon expiration or termination of this Agreement, this license is revoked immediately and the Customer agrees to stop using the Apping Technology Edition software and the Cloud Platform. Should the Customer breach the terms of this section, the Customer agrees to pay Apping Technology an extra fee equal to 300% of the applicable list price for the actual number of Users and installed Apps.</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">4. Services</h3>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">4.1 Bug Fixing Service</h4>
                  <p>For the duration of this Agreement, Apping Technology commits to making all reasonable efforts to remedy any Bug of the Software and Covered Extra Modules submitted by the Customer through the appropriate channel, and to start handling such Customer submissions within 2 business days. As soon as the Bug is fixed an appropriate remedy will be communicated to the Customer. When a Bug is fixed in any Covered Version, Apping Technology commits to fixing the Bug in all more recent Covered Versions of the Software. Both parties acknowledge that as specified in the license of the Software and in the 7.3 Limitation of Liability section of this Agreement, Apping Technology cannot be held liable for Bugs in the Software or in Covered Extra Modules.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">4.2 Security Update Service</h4>
                  <p>Apping Technology commits to apply the security remedies for any security Bug discovered in a version of the Software hosted on the Cloud Platform, on all systems under its control, as soon as the remedy is available, without requiring any manual action of the Customer.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">4.3 Support Services Scope</h4>
                  <p>For the duration of this Agreement, the Customer may open an unlimited number of support tickets free of charge, exclusively for questions regarding Bugs (see 4.1 Bug Fixing Service) or guidance with respect to the use of the standard features of the Software and Covered Extra Modules. Other assistance requests, such as questions related to development or customizations may be covered through the purchase of a separate service agreement. In case it's not clear if a request is covered by this Agreement, the decision is at the discretion of Apping Technology.</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">5. Charges and Fees</h3>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">5.1 Standard Charges</h4>
                  <p>The standard charges for the Apping Technology subscription and the Services are based on the number of Users and the installed Apps used by the Customer, and specified in writing at the conclusion of the Agreement. When during the Term, the Customer has more Users or more installed Apps than specified at the time of conclusion of this Agreement, the Customer agrees to pay an extra fee equivalent to the applicable list price (at the beginning of the Term) for the additional Users or Apps, for the remainder of the Term. The charges or fees paid to Apping Technology is non-refundable, if the Customer decides to terminate the contract. For termination, pls refer to clause 6.6.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">5.2 Renewal Charges</h4>
                  <p>Upon renewal as covered in section 1 Term of the Agreement, the charges will be the same as before. However, the charges could be subjected to increment, depending on the cost of Apping Technology for providing such services, and the amount of work needed to maintain the customizations requested by the client.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">5.3 Taxes</h4>
                  <p>All fees and charges are exclusive of all applicable federal, provincial, state, local or other governmental taxes, fees or charges (collectively, "Taxes"). The Customer is responsible for paying all Taxes associated with purchases made by the Customer under this Agreement, except when Apping Technology is legally obliged to pay or collect Taxes for which the Customer is responsible.</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">6. Conditions of Services</h3>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">6.1 Customer Obligations</h4>
                  <p>The Customer agrees to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>pay Apping Technology any applicable charges for the Services of the present Agreement, in accordance with the payment conditions specified at the signature of this contract ;</li>
                    <li>immediately notify Apping Technology when their actual number of Users or their installed Apps exceed the numbers specified at the conclusion of the Agreement, and in this event, pay the applicable additional fee as described in section 5.1 Standard charges;</li>
                    <li>take all measures necessary to guarantee the unmodified execution of the part of the Software that verifies the validity of the Apping Technology Edition usage, as described in 3 Access to the Software ;</li>
                    <li>appoint 1 dedicated Customer contact person for the entire duration of the Agreement;</li>
                    <li>provide written notice to Apping Technology 30 days before changing their main point of contact to work with another Apping Technology.</li>
                    <li>take all reasonable measures to keep their user accounts secure, including by choosing a strong password and not sharing it with anyone else;</li>
                    <li>make a reasonable use of the Hosting Services, to the exclusion of any illegal or abusive activities, and strictly observe the rules outlined in the Acceptable Use Policy.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">6.2 No Soliciting or Hiring</h4>
                  <p>Except where the other party gives its consent in writing, each party, its affiliates and representatives agree not to solicit or offer employment to any employee of the other party who is involved in performing or using the Services under this Agreement, for the duration of the Agreement and for a period of 12 months from the date of termination or expiration of this Agreement. In case of any breach of the conditions of this section that leads to the termination of said employee toward that end, the breaching party agrees to pay to the other party an amount of RM80,000.00 (Ringgit Malaysia Fifty Thousand).</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">6.3 Publicity</h4>
                  <p>Except where notified otherwise in writing, each party grants the other a non-transferable, non-exclusive, royalty free, worldwide license to reproduce and display the other party's name, logos and trademarks, solely for the purpose of referring to the other party as a customer or supplier, on websites, press releases and other marketing materials.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">6.4 Confidentiality</h4>
                  <p><strong>Definition of "Confidential Information":</strong> All information disclosed by a party (the "Disclosing Party") to the other party (the "Receiving Party"), whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure. In particular any information related to the business, affairs, products, developments, trade secrets, know-how, personnel, customers and suppliers of either party should be regarded as confidential.</p>
                  <p>For all Confidential Information received during the Term of this Agreement, the Receiving Party will use the same degree of care that it uses to protect the confidentiality of its own similar Confidential Information, but not less than reasonable care. The Receiving Party may disclose Confidential Information of the Disclosing Party to the extent compelled by law to do so, provided the Receiving Party gives the Disclosing Party prior notice of the compelled disclosure, to the extent permitted by law.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">6.5 Data Protection</h4>
                  <p><strong>Definitions</strong> "Personal Data", "Controller", "Processing" take the same meanings as in the Regulation (EU) 2016/679 and the Directive 2002/58/EC, and any regulation or legislation that amends or replaces them (hereafter referred to as "Data Protection Legislation")</p>

                  <p className="font-semibold mt-4 !text-foreground">Processing of Personal Data</p>
                  <p>The parties acknowledge that the Customer's database may contain Personal Data, for which the Customer is the Controller. This data will be processed by Apping Technology when the Customer instructs so, by using any of the Services that require a database, or if the Customer transfers their database or a part of their database to Apping Technology for any reason pertaining to this Agreement. This processing will be performed in conformance with Data Protection Legislation. In particular, Apping Technology commits to:</p>
                  <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li>only process the Personal Data when and as instructed by the Customer, and for the purpose of performing one of the Services under this Agreement, unless required by law to do so, in which case Apping Technology will provide prior notice to the Customer, unless the law forbids it;</li>
                    <li>ensure that all persons within Apping Technology authorised to process the Personal Data have committed themselves to confidentiality;</li>
                    <li>implement and maintain appropriate technical and organizational measures to protect the Personal Data against unauthorized or unlawful processing and against accidental loss, destruction, damage, theft, alteration or disclosure;</li>
                    <li>forward promptly to the Customer any Data Protection request that was submitted to Apping Technology with regard to the Customer's database;</li>
                    <li>notify the Customer promptly upon becoming aware of and confirming any accidental, unauthorized, or unlawful processing of, disclosure of, or access to the Personal Data;</li>
                    <li>notify the Customer if the processing instructions infringe applicable Data Protection Legislation, in the opinion of Apping Technology;</li>
                    <li>make available to the Customer all information necessary to demonstrate compliance with the Data Protection Legislation, allow for and contribute reasonably to audits, including inspections, conducted or mandated by the Customer;</li>
                    <li>permanently delete all copies of the Customer's database in possession of Apping Technology, or return such data, at the Customer's choice, upon termination of this Agreement, subject to the delays specified in Apping Technology's Privacy Policy;</li>
                  </ol>
                  <p>With regard to points (d) to (f), the Customer agrees to provide Apping Technology with accurate contact information at all times, as necessary to notify the Customer's Data Protection responsible.</p>

                  <p className="font-semibold mt-4 !text-foreground">Subprocessors</p>
                  <p>The Customer acknowledges and agrees that in order to provide the Services, Apping Technology may use third-party service providers (Subprocessors) to process Personal Data. Apping Technology commits to only use Subprocessors in compliance with Data Protection Legislation. This use will be covered by a contract between Apping Technology and the Subprocessor that provides guarantees to that effect. Apping Technology's Privacy Policy, provides up-to-date information regarding the names and purposes of Subprocessors currently in use by Apping Technology for the execution of the Services.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">6.6 Termination</h4>
                  <p>In the event that either Party fails to fulfill any of its obligations arising herein, and if such breach has not been remedied within 30 calendar days from the written notice of such breach, this Agreement may be terminated immediately by the non-breaching Party. Further, Apping Technology may terminate the Agreement immediately in the event the Customer fails to pay the applicable fees for the Services within 21 days following the due date specified on the corresponding invoice, and after minimum 3 reminders.</p>
                  <p><strong>Surviving Provisions:</strong> The sections "6.4 Confidentiality", "7.2 Disclaimers", "7.3 Limitation of Liability", and "8 General Provisions" will survive any termination or expiration of this Agreement.</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">7. Warranties, Disclaimers and Liability</h3>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">7.1 Warranties</h4>
                  <p>Apping Technology owns the copyright or an equivalent on 100% of the code of the Software, and confirms that all the software libraries required to use the Software are available under a license compatible with the license of the Software. For the duration of this Agreement, Apping Technology commits to using commercially reasonable efforts to execute the Services in accordance with the generally accepted industry standards provided that:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>the Customer's computing systems are in good operational order</li>
                    <li>the Customer provides adequate troubleshooting information and,</li>
                    <li>all amounts due to Apping Technology have been paid.</li>
                  </ul>
                  <p>The Customer's sole and exclusive remedy and Apping Technology's only obligation for any breach of this warranty is for Apping Technology to resume the execution of the Services at no additional charge.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">7.2 Disclaimers</h4>
                  <p>Except as expressly provided herein, neither party makes any warranty of any kind, whether express, implied, statutory or otherwise, and each party specifically disclaims all implied warranties, including any implied warranty of merchantability, fitness for a particular purpose or non-infringement, to the maximum extent permitted by applicable law. Apping Technology does not warrant that the Software complies with any local or international law or regulations.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">7.3 Limitation of Liability</h4>
                  <p>To the maximum extent permitted by law, the aggregate liability of each party together with its affiliates arising out of or related to this Agreement will not exceed 50% of the total amount paid by the Customer under this Agreement during the 12 months immediately preceding the date of the event giving rise to such claim. Multiple claims shall not enlarge this limitation. In no event will either party or its affiliates be liable for any indirect, special, exemplary, incidental or consequential damages of any kind, including but not limited to loss of revenue, profits, savings, loss of business or other financial loss, costs of standstill or delay, lost or corrupted data, arising out of or in connection with this Agreement regardless of the form of action, whether in contract, tort (including strict negligence) or any other legal or equitable theory, even if a party or its affiliates have been advised of the possibility of such damages, or if a party or its affiliates' remedy otherwise fails of its essential purpose.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">7.4 Force Majeure</h4>
                  <p>Neither party shall be liable to the other party for the delay in any performance or failure to render any performance under this Agreement when such failure or delay finds its cause in a case of force majeure, such as governmental regulations, fire, strike, war, flood, accident, epidemic, embargo, appropriation of plant or product in whole or in part by any government or public authority, or any other cause or causes, whether of like or different nature, beyond the reasonable control of such party as long as such cause or causes exist.</p>

                  <h3 className="text-xl font-semibold mt-8 mb-3 !text-foreground">8. General Provisions</h3>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">8.1 Governing Law</h4>
                  <p>This Agreement and all Customer orders will be subject to Malaysian law. Any dispute arising out of or in connection with this Agreement or any Customer order will be subject to the exclusive jurisdiction of the Federal Court of Malaysia.</p>

                  <h4 className="text-lg font-semibold mt-6 mb-2 !text-foreground">8.2 Severability</h4>
                  <p>In case any one or more of the provisions of this Agreement or any application thereof shall be invalid, illegal or unenforceable in any respect, the validity, legality and enforceability of the remaining provisions of this Agreement and any application thereof shall be in no way thereby affected or impaired. Both parties undertake to replace any invalid, illegal or unenforceable provision of this Agreement by a valid provision having the same effects and objectives.</p>

                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;

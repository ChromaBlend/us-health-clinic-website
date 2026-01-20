import React from 'react';
import { SectionHeading } from '../components/UI';

const PrivacyPractices = () => {
    return (
        <main className="pt-32 pb-24 px-6 bg-cream-50 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <SectionHeading className="mb-8">Notice of Privacy Practices</SectionHeading>
                <div className="prose prose-teal max-w-none text-gray-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                    <p className="mb-4">
                        THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
                    </p>
                    <p className="mb-8">
                        This Notice of Privacy Practices (the “Notice”) tells you about the ways we may use and disclose your protected health information (“medical information”) and your rights and our obligations regarding the use and disclosure of your medical information. “We” refers to, and this Notice applies to third party medical groups providing clinical services through the USHC Health, Inc. platform, including, respectively, their providers and employees (“Medical Groups”).
                    </p>

                    {/* Section 1 */}
                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">1. Our obligations</h3>
                    <p className="mb-4">
                        We maintain the privacy of your medical information and notify affected individuals following a breach of unsecured medical information, in each case to the extent required by state and federal law. We provide you this Notice explaining our legal duties and privacy practices with respect to medical information about you.
                    </p>

                    {/* Section 2 */}
                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">2. How we may use and disclose medical information about you</h3>
                    <p className="mb-4">
                        The following categories describe the different ways that we typically use and disclose medical information, the purposes for such uses and disclosures, and the reasons for such uses and disclosures. As noted below, we may contact you via different methods that you may approve, such as via text message, email, or through your USHC account. In most instances, your initial communication with the applicable Medical Group will be through an interaction with the Medical Group through the USHC website or app.
                    </p>
                    <p className="mb-4">
                        Specifically speaking, the applicable Medical Group may communicate with you in the following specific ways and for the following specific purposes:
                    </p>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 mb-6 shadow-sm">
                        <ul className="space-y-4">
                            <li>
                                <span className="font-bold text-teal-800">Email communications:</span> To obtain information from you necessary to provide services to you, communicate with you about your lab test results, and provide you with information on special offers and deals. By engaging in our medical services and receiving medical information via email, you understand that email is not a secure, encrypted or confidential method of communication.
                            </li>
                            <li>
                                <span className="font-bold text-teal-800">Texts:</span> To send you appointment reminders and obtain information from you necessary to provide services to you and communicate with you about your lab test results, medical recommendations, prescriptions and other medical information from your Healthcare Provider. While we take your privacy and the security of your health and other sensitive information very seriously, the transmission of information over the internet and mobile networks is not 100% secure. Text messages may be encrypted on the USHC side only, which means that it is possible they may be intercepted by third parties. If you choose to send or receive information about your health or any other sensitive information by text message, you understand this risk.
                            </li>
                            <li>
                                <span className="font-bold text-teal-800">Customer Service Emails, texts, or app notifications:</span> To provide you with updates on and other questions applicable to your provider visit(s)
                            </li>
                            <li>
                                <span className="font-bold text-teal-800">Tracking emails:</span> If you are prescribed any medications from the Medical Groups, to notify you when prescriptions have been shipped, will arrive, and other confirmations.
                            </li>
                            <li>
                                <span className="font-bold text-teal-800">Order information:</span> To provide information on content of orders (additional products or samples).
                            </li>
                        </ul>
                    </div>

                    <p className="mb-4">
                        <span className="font-bold">For Treatment.</span> We may use and disclose medical information about you to provide you with health care treatment and related services, including coordinating and managing your health care through the USHC platform. We may disclose medical information about you to physicians, nurses, other health care providers and personnel who are providing or involved in providing healthcare to you (both within and outside of the applicable Medical Group(s)). For example, should your care require referral to a pharmacy for the provision of prescription drugs, we may provide that pharmacy with your medical information in order to aid the pharmacy in its fulfillment of services to you. Additionally, we utilize Metriport, a third party healthcare data exchange service that helps digital health companies access and manage patient health and medical data to better coordinate your healthcare.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">For Payment and Reimbursement.</span> We may use and disclose protected health information so that we may bill and receive payment from you for the treatment and services you received. Additionally, if you select nutrition services, we and our affiliated covered entities may disclose your protected health information to bill your insurance and receive payment. If you opt to use an HSA/FSA to purchase recommended health related products from the USHC marketplace, we will need to share your information with your HSA/FSA account provider and our third party provider to prepare a letter of medical necessity on your behalf. They may request information from us about your visits and diagnoses.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">For Health Care Operations.</span> We may use and disclose medical information about you for our health care operations. These uses and disclosures are necessary to operate and manage our practice and to promote quality care. For example, we may need to use or disclose your medical information in order to assess the quality of care you receive or to conduct certain cost management, business management, administrative, or quality improvement activities or to provide information to our insurance carriers.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Quality Assurance and Utilization Review.</span> We may need to use or disclose your medical information for our internal processes to assess and facilitate the provision of quality care to our patients. We may need to use or disclose your medical information to perform a review of the services we provide in order to evaluate whether that the appropriate level of services is received, depending on condition and diagnosis.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Credentialing and Peer Review.</span> We may need to use or disclose your medical information in order for us to review the credentials, qualifications and actions of our health care providers.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Treatment Alternatives.</span> We may use and disclose medical information to tell you about or recommend possible treatment options or alternatives that we believe may be of interest to you.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Appointment Reminders and Information about Health Related Benefits and Services.</span> We may use and disclose medical information, in order to contact you (including, for example, contacting you by phone and leaving a message on an answering machine) to provide appointment reminders and other information. We may use and disclose medical information to tell you about health related benefits or services that we believe may be of interest to you. See also the specific types of communications noted above.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Vendors.</span> There are some services (such as billing or legal services) that may be provided to or on behalf of the Medical Groups through contracts with third parties, such as USHC Health, Inc. who provides us with management and billing services via the USHC platform. When these services are contracted, we may disclose your medical information to our vendor so that they can perform the job we have asked them to do. To protect your medical information; however, we require the business associate to appropriately safeguard your information.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Individuals Involved in Your Care or Payment for Your Care.</span> We may disclose medical information about you to a friend or family member who is involved in your health care, as well as to someone who helps pay for your care, but we will do so only as allowed by state or federal law (with an opportunity for you to agree or object when required under the law), or in accordance with your prior authorization.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">As Required by Law.</span> We will disclose medical information about you when required to do so by federal, state, or local law or regulations.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Other.</span> Subject to applicable legal requirements, and where appropriate for your medical care or required by law, we may also use your medical information (i) to avert an imminent threat of injury to health or safety, (ii) for organ donation purposes, for research, (iii) to appropriate military authorities if you are in the armed forces, (iv) for workers compensation programs, (v) for public health activities, (vi) for health oversight activities, (vii) for other legal matters, (viii) for law enforcement purposes, (ix) to coroners and medical examiners, or (x) for marketing or fundraising purposes
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Electronic Disclosures of Medical Information.</span> Under the law of certain states, we are required to provide notice to you if your medical information is subject to electronic disclosure. This Notice serves as general notice that we may disclose your medical information electronically for treatment, payment, or health care operations or as otherwise authorized or required by state or federal law.
                    </p>

                    {/* Section 3 (Renumbered from User Input) */}
                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">3. Other uses of medical information</h3>
                    <p className="mb-4">
                        <span className="font-bold">Authorizations.</span> There are times we may need or want to use or disclose your medical information for reasons other than those listed above, but to do so we will need your prior authorization. Other than expressly provided herein, any other uses or disclosures of your medical information will require your specific written authorization.
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">Right to Revoke Authorization.</span> If you provide us with written authorization to use or disclose your medical information for such other purposes, you may revoke that authorization in writing at any time. If you revoke your authorization, we will no longer use or disclose your medical information for the reasons covered by your written authorization. You understand that we are unable to take back any uses or disclosures we have already made in reliance upon your authorization, and that we are required to retain our records of the care that we provided to you.
                    </p>

                    {/* Section 4 (Renumbered from User Input) */}
                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">4. Your rights regarding medical information about you</h3>
                    <p className="mb-4">
                        Certain laws and regulations provide you with certain rights regarding the medical information we have about you. The following is a summary of those rights.
                    </p>
                    <ul className="list-disc pl-5 space-y-4 mb-4">
                        <li>
                            <span className="font-bold">Right to Inspect and Copy.</span> Under most circumstances, you have the right to inspect and/or copy your medical information that we maintain in our possession in a designated record set, which generally includes your medical and billing records. To inspect or copy your medical information, you must submit your request to do so in writing to the applicable Medical Group at <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>. If you request a copy of your information, we may charge a fee for the costs of copying, mailing, or certain supplies associated with your request. The fee we may charge will be the amount allowed by state law. If your requested medical information is maintained in an electronic format (e.g., as part of an electronic medical record, electronic billing record, or other group of records maintained by the applicable Medical Group that is used to make decisions about you) and you request an electronic copy of this information, then we will provide you with the requested medical information in the electronic form and format requested, if it is readily producible in that form and format. If it is not readily producible in the requested electronic form and format, we will provide access in a readable electronic form and format as agreed to by the applicable Medical Group and you. In certain very limited circumstances allowed by law, we may deny your request to review or copy your medical information. We will give you any such denial in writing. If you are denied access to medical information, you may request that the denial be reviewed. Another licensed health care professional chosen by the applicable Medical Group will review your request and the denial. The person conducting the review will not be the person who denied your request. We will abide by the outcome of the review.
                        </li>
                        <li>
                            <span className="font-bold">Right to Amend.</span> If you feel the medical information that we have about you is incorrect or incomplete, you may ask us to amend the information. You have the right to request an amendment for as long as the information is kept by the applicable Medical Group. To request an amendment, your request must be in writing and submitted to <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>. In your request, you must provide a reason as to why you want this amendment. If we accept your request, we will notify you of that in writing. We may deny your request for an amendment if it is not in writing or does not include a reason to support the request. In addition, we may deny your request if you ask us to amend information that (i) was not created by us (unless you provide a reasonable basis for asserting that the person or organization that created the information is no longer available to act on the requested amendment), (ii) is not part of the information kept by the applicable Medical Group, (iii) is not part of the information which you would be permitted to inspect and copy, or (iv) is accurate and complete. If we deny your request, we will notify you of that denial in writing.
                        </li>
                        <li>
                            <span className="font-bold">Right to an Accounting of Disclosures.</span> You have the right to request an “accounting of disclosures” of your medical information. This is a list of the disclosures we have made for up to six years prior to the date of your request of your medical information, but may not include disclosures for Treatment, Payment, or Health Care Operations (as described in this Notice) or disclosures made pursuant to your specific authorization (as described in this Notice), or certain other disclosures. To request a list of accounting, you must submit your request in writing to <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>. Your request must state a time period, which may not be longer than six years. Your request should indicate in what form you want the list (for example, on paper or electronically). The first list you request within a twelve-month period will be free. For additional lists, we may charge you a reasonable fee for the costs of providing the list. We will notify you of the cost involved and you may choose to withdraw or modify your request at that time before any costs are incurred.
                        </li>
                        <li>
                            <span className="font-bold">Right to Request Restrictions.</span> You have the right to request a restriction or limitation on the medical information we use or disclose about you for Treatment, Payment, or Health Care Operations. You also have the right to request a restriction or limitation on the medical information we disclose about you to someone who is involved in your care or the payment for your care, like a family member or friend. Except as specifically described below in this Notice, we are not required to agree to your request for a restriction or limitation. If we do agree, we will comply with your request unless the information is needed to provide emergency treatment. In addition, there are certain situations where we won't be able to agree to your request, such as when we are required by law to use or disclose your medical information. To request restrictions, you must make your request in writing to <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>. In your request, you must specifically tell us what information you want to limit, whether you want us to limit our use, disclosure, or both, and to whom you want the limits to apply. As stated above, in most instances we do not have to agree to your request for restrictions on disclosures that are otherwise allowed. However, if you pay or another person (other than a health plan) pays on your behalf for an item or service in full, out of pocket, and you request that we not disclose the medical information relating solely to that item or service to a health plan for the purposes of payment or health care operations, then we will be obligated to abide by that request for restriction unless the disclosure is otherwise required by law. You should be aware that such restrictions may have unintended consequences, particularly if other providers need to know that information (such as a pharmacy filling a prescription). It will be your obligation to notify any such other providers of this restriction. Additionally, such a restriction may impact whether an insurance company will pay for related care that you may not want to pay for out of pocket (and which would not be subject to the restriction).
                        </li>
                        <li>
                            <span className="font-bold">Right to Request Confidential Communications.</span> You have the right to request that we communicate with you about medical matters in a certain way or at a certain location. For example, you can ask that we only contact you through a personal email address and not at work or, conversely, only at work and not a personal email address. To request such confidential communications, you must make your request in writing to <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>. We will not ask the reason for your request, and we will use our best efforts to accommodate all reasonable requests, but there are some requests with which we will not be able comply. Your request must specify how and where you wish to be contacted.
                        </li>
                        <li>
                            <span className="font-bold">Right to an Email or Paper Copy of This Notice.</span> You have the right to a paper copy of this Notice. You may ask us to give you a copy of this Notice at any time. To obtain a copy of this Notice, you must make your request in writing to <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>.
                        </li>
                        <li>
                            <span className="font-bold">Right to Breach Notification.</span> In certain instances, we may be obligated to notify you (and potentially other parties) if we become aware that your medical information has been improperly disclosed or otherwise subject to a “breach” as defined in and/or required by applicable law.
                        </li>
                    </ul>

                    {/* Section 5 */}
                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">5. Changes to this notice</h3>
                    <p className="mb-4">
                        We reserve the right to change this Notice at any time, along with our privacy policies and practices. We reserve the right to make the revised or changed Notice effective for medical information we already have about you as well, as any information we receive in the future. We will post a copy of the current notice, along with an announcement that changes have been made, as applicable, on our website and in any physical office in which the Medical Groups practice medicine. When changes have been made to the Notice, you may obtain a revised copy by writing to <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>.
                    </p>

                    {/* Section 6 */}
                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">6. Complaints</h3>
                    <p className="mb-4">
                        If you believe that your privacy rights as described in this Notice have been violated, you may file a complaint with the applicable Medical Group at <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>.
                    </p>
                    <p className="mb-4">
                        The Medical Groups will not retaliate against any individual who files a complaint. You may also file a complaint with the Secretary of the Department of Health and Human Services.
                    </p>
                    <p className="mb-4">
                        In addition, if you have any questions about this Notice, please contact <a href="mailto:compliance@ushc.com" className="text-teal-700 underline">compliance@ushc.com</a>.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPractices;

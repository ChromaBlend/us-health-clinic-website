import React from 'react';
import { SectionHeading } from '../components/UI';

const MedicalConsent = () => {
    return (
        <main className="pt-32 pb-24 px-6 bg-cream-50 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <SectionHeading className="mb-8">Medical Consent</SectionHeading>
                <div className="prose prose-teal max-w-none text-gray-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                    <p className="mb-4">
                        Informed consent for medical treatment and telehealth services.
                    </p>
                    <p className="mb-4">
                        <strong>What is Telemedicine?</strong><br />
                        Telemedicine is the delivery of healthcare services, including examination, consultation, diagnosis, and treatment, through electronic communication technologies when you (the patient) are located in a different location than your healthcare provider.
                    </p>

                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">Benefits of Using Telemedicine</h3>
                    <p className="mb-4">
                        The benefits of telemedicine include having access to medical care anywhere you have access to the internet—including from the comfort of your home. Telemedicine means you don’t risk exposure to illness in busy waiting rooms, and you do not have to wait several days for an in-person appointment. Telemedicine also means you do not have to travel great distances to gain access to specialty care that may not be available in your community.
                    </p>

                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">Possible Risks of Using Telemedicine</h3>
                    <p className="mb-4">
                        As with any medical treatment, there are potential risks associated with the use of telemedicine. These risks may include, without limitation, the following:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>
                            Delays in medical evaluation and consultation or treatment may occur due to deficiencies or failures of the equipment or the Internet, which may include poor video and data quality, Internet outages, or other service interruption issues. You may reschedule the visit with your healthcare provider should these interruptions occur. If you need assistance in the event of a telemedicine equipment failure, please contact us at: <a href="mailto:concierge@ushc.com" className="text-teal-700 underline">concierge@ushc.com</a>
                        </li>
                        <li>
                            Security protocols could fail, causing a breach of privacy of personal medical information.
                        </li>
                        <li>
                            Because USHC does not have access to your complete medical records, if you do not disclose to your healthcare provider a sufficient amount of information concerning your medical history, including diagnoses, treatments, medications/supplements, and allergies, adverse treatment, drug interactions, or allergic reactions, or other negative outcomes may occur.
                        </li>
                        <li>
                            Telemedicine services are NOT emergency services, and your personal data WILL NOT BE MONITORED 24/7. If you think you are experiencing a medical emergency, CALL 911 IMMEDIATELY.
                        </li>
                        <li>
                            <strong>THE CARE YOU RECEIVE WILL BE AT THE SOLE DISCRETION OF THE HEALTHCARE PROVIDER WHO IS TREATING YOU, WITH NO GUARANTEE OF DIAGNOSIS, TREATMENT, OR PRESCRIPTION. THE HEALTHCARE PROVIDER WILL DETERMINE WHETHER OR NOT THE CONDITION BEING DIAGNOSED AND/OR TREATED IS APPROPRIATE FOR A TELEMEDICINE ENCOUNTER VIA THE SERVICE.</strong>
                        </li>
                    </ul>

                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">Your Rights and Acknowledgements</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>
                            You understand that certifying to or providing false, misleading, or incomplete health information may result in incorrect treatment, delayed care, or harm. You are responsible for ensuring that the attestation you provide under oath is accurate, complete, and fully covers all information you know to be relevant to your prescription request, your medical history and current condition. You also confirm that any additional information you provide to an Affiliated Provider, via secure texting, phone, audio, video, or pictorially, about your medical history and current condition will be truthful, accurate, and complete.
                        </li>
                        <li>
                            You understand that you have the option to refuse a telehealth visit at any time without affecting your right to future care or treatment and without risking the loss or withdrawal of any benefits to which you would otherwise be entitled.
                        </li>
                        <li>
                            You understand that there are no additional or hidden fees associated with the use of telemedicine.
                        </li>
                        <li>
                            You understand that your healthcare information may be shared with other individuals in accordance with the USHC Terms of Service, USHC Privacy Policy and regulations or laws in the state or territory in which you are located. You further understand that you have the right to request disclosure of your Healthcare Information to any third party, and that such disclosure will be made upon USHC’s receipt of your signed written authorization.
                        </li>
                        <li>
                            You understand that dissemination of any personally identifiable images or information from the telemedicine visit to researchers or other entities will not occur without your express written consent.
                        </li>
                        <li>
                            Telemedicine may involve electronic communication of your personal medical information to remote healthcare practitioners who may be located outside of your state.
                        </li>
                        <li>
                            You have the same privacy rights via telemedicine that you would have during an in-person visit.
                        </li>
                        <li>
                            You understand that no results can be guaranteed or assured—you may not achieve the anticipated benefits of the telemedicine services, and your condition may remain unchanged or worsen despite treatment. You acknowledge that there is no guarantee that you will be issued a prescription and that the decision of whether a prescription is appropriate will be made solely in the professional judgment of your Affiliated Provider. You acknowledge that your Affiliated Provider may determine that your condition requires in-person care, refuse to prescribe a medication, and/or refer you accordingly.
                        </li>
                        <li>
                            You understand that a variety of alternative methods of medical care may be available to you, and that you may choose one or more of these at any time.
                        </li>
                        <li>
                            You understand that all information submitted to USHC will be part of your medical record, and you have the right to review and receive copies of your medical records in accordance with applicable law. For more information on how to access your medical records, please contact <a href="mailto:concierge@ushc.com" className="text-teal-700 underline">concierge@ushc.com</a>.
                        </li>
                        <li>
                            You understand that your telemedicine visit may be with a non-physician Affiliated Provider. You may request that your telemedicine visit be scheduled with a physician.
                        </li>
                        <li>
                            You acknowledge that there is a risk of technical failures during the telehealth visit beyond the control of USHC and your Affiliated Provider and will hold the Affiliated Provider and USHC harmless for such loss.
                        </li>
                        <li>
                            You will provide your accurate physical location when asked by an Affiliated Provider to ensure that such provider is licensed to provide telemedicine services to you. Your Affiliated Provider will validate this prior to commencing your visit.
                        </li>
                        <li>
                            You consent to the disclosure of any medical records prepared by USHC to your primary care provider.
                        </li>
                        <li>
                            <strong>FOR CALIFORNIA RESIDENTS:</strong> You acknowledge receipt of the California Open Payments Database notice: The Open Payments Database is a federal tool for researching payments made by drug and medical device companies to physicians and hospitals. It is available at <a href="https://openpaymentsdata.cms.gov" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">https://openpaymentsdata.cms.gov</a>.
                        </li>
                        <li>
                            You understand that telehealth is an evolving field, and its applications may extend beyond what is described in this consent.
                        </li>
                        <li>
                            This Telemedicine Informed Consent is valid for one (1) year from the initiation of your initial Telemedicine visit. If you would like to withdraw consent, you must do so prior to receiving any further treatment by emailing us at <a href="mailto:concierge@ushc.com" className="text-teal-700 underline">concierge@ushc.com</a>. Your withdrawal of consent will not affect your right to future care or treatment.
                        </li>
                    </ul>

                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">Complaints</h3>
                    <p className="mb-4">
                        To file a complaint against a physician, please contact the state medical board in your state.<br />
                        You can find contact information for all US medical boards here: <a href="https://www.fsmb.org/contact-a-state-medical-board" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">https://www.fsmb.org/contact-a-state-medical-board</a>.
                    </p>

                    <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">Acceptance</h3>
                    <p className="mb-4">
                        By accepting this Consent to Telehealth, you agree and acknowledge that you have read and understood this Consent to Telehealth, including potential risks and benefits and your rights. By accepting, you consent to receive medical care via telehealth from Affiliated Providers (as such term is defined in the USHC Privacy Policy) through USHC.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default MedicalConsent;

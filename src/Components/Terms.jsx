import React from "react";

export default function Terms() {
  return (
    <div className=" min-h-screen px-[20px]">
      <div className="container mx-auto px-4 py-8">
        <p className="mb-4 text-sm">
          <strong>Effective Date:</strong> July 15, 2024
        </p>

        <h1 className="text-3xl font-bold mb-4 text-orange-800 dark:text-orange-300">
          Terms of Service – Martspell
        </h1>

        <p className="mb-6 text-base">
          Our website may use the Terms and Conditions given below. The terms
          “We” / “Us” / “Our” / “Company” refer to Martspell and “Visitor” /
          “User” refer to users.
        </p>

        <p className="mb-6 text-base">
          This page states the Terms and Conditions under which you (Visitor)
          may visit this website (“Website”). Please read carefully. If you do
          not accept these Terms and Conditions, you should exit this site.
          Martspell and its subsidiaries, associates or investment companies
          reserve the right to revise these Terms at any time by updating this
          posting. You should visit this page periodically to review the Terms,
          as they are binding on all users of this Website.
        </p>

        <section className="pb-6">
          <h2 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-300">
            Use of Content
          </h2>
          <p className="text-base mb-4">
            All logos, brands, marks, headings, labels, names, signatures,
            numerals, shapes or combinations thereof appearing on this site are
            the property of Martspell or used under license. Use of this
            content—such as selling, modifying, reproducing, displaying,
            performing, distributing or otherwise using it for any public or
            commercial purpose—is strictly prohibited without written
            permission.
          </p>
        </section>

        <section className="pb-6">
          <h2 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-300">
            Acceptable Website Use
          </h2>

          <h3 className="font-semibold text-lg mb-2">A) Security Rules</h3>
          <ul className="list-disc list-inside space-y-2 mb-4 text-base">
            <li>
              Do not violate or attempt to violate the site’s security (e.g.,
              accessing unauthorized data or accounts).
            </li>
            <li>
              Do not probe, scan, or breach security/authentication without
              authorization.
            </li>
            <li>
              Do not interfere with service—via viruses, flooding, mail bombing,
              crashing, etc.
            </li>
            <li>
              Do not send unsolicited email (spam), including promotions or ads.
            </li>
          </ul>

          <h3 className="font-semibold text-lg mb-2">B) General Rules</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              Do not transmit or store material that violates laws, infringes IP
              rights, invades privacy, or is defamatory, obscene, threatening,
              abusive, or hateful.
            </li>
          </ul>
        </section>

        <section className="pb-6">
          <h2 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-300">
            Indemnity
          </h2>
          <p className="text-base mb-4">
            You agree to indemnify and hold harmless Martspell, its officers,
            directors, employees, and agents from any claims, liabilities,
            losses, damages, or expenses arising from your use of the Website or
            breach of these Terms.
          </p>
        </section>

        <section className="pb-6">
          <h2 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-300">
            Liability
          </h2>
          <p className="text-base mb-4">
            Martspell and its related parties shall not be liable for any
            direct, indirect, incidental, special, consequential, or exemplary
            damages resulting from use or inability to use the service,
            including substitutes, purchases, data loss, unauthorized access, or
            other service-related issues—even if advised of the possibility of
            such damages.
          </p>
          <p className="text-base mb-4">
            Martspell is not liable for damages arising from interruption,
            suspension, or termination of service, regardless of cause.
          </p>
          <p className="text-base mb-4">
            In no event shall Martspell’s total liability exceed the amount you
            paid to Martspell related to the cause of action, if any.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-orange-700 dark:text-orange-300">
            Disclaimer of Consequential Damages
          </h2>
          <p className="text-base">
            In no event shall Martspell or associated entities be liable for any
            damages whatsoever—incidental, consequential, lost profits, hardware
            damage, data loss, or business interruption—resulting from your use
            or inability to use the Website, irrespective of legal theory or
            prior notice.
          </p>
        </section>
      </div>
    </div>
  );
}

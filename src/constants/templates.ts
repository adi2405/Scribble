export const templates: {
  id: string;
  label: string;
  imageUrl: string;
  initialContent: string;
}[] = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.png",
    initialContent: `
      <p style="line-height: normal">
        <span
          style="
            color: rgb(66, 66, 66);
            font-family: &quot;Courier New&quot;;
            font-size: 36pt;
          "
          >YOUR COMPANY</span
        >
      </p>
      <img
        src="/templates/business-letter/image1.png"
        wrapperstyle="display: flex"
      />
      <p style="line-height: 1.8"></p>
      <p style="line-height: 1.38">
        <span
          style="
            color: rgb(102, 102, 102);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >123 YOUR STREET</span
        >
      </p>
      <p style="line-height: 1.38">
        <span
          style="
            color: rgb(102, 102, 102);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >YOUR CITY, ST 12345</span
        >
      </p>
      <p style="line-height: 1.38">
        <span
          style="
            color: rgb(102, 102, 102);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >(123) 456-7890</span
        >
      </p>
      <p style="line-height: 1.38">
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="mailto:NO_REPLY@EXAMPLE.COM"
          ><span
            style="
              color: rgb(102, 102, 102);
              font-family: &quot;Courier New&quot;;
              font-size: 10pt;
            "
            >NO_REPLY@EXAMPLE.COM</span
          ></a
        >
      </p>
      <p style="line-height: 1.38"></p>
      <p style="line-height: 1.8">
        <span
          style="
            color: rgb(227, 28, 96);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >September 04, 20XX</span
        >
      </p>
      <p style="line-height: 1.8"></p>
      <p style="line-height: 1.8">
        <span
          style="
            color: rgb(66, 66, 66);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >Dear Ms. Reader,&nbsp;</span
        >
      </p>
      <p style="line-height: 1.8">
        <span
          style="
            color: rgb(66, 66, 66);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat.</span
        >
      </p>
      <p style="line-height: 1.8"></p>
      <p style="line-height: 1.8">
        <span
          style="
            color: rgb(66, 66, 66);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
          et accumsan.</span
        >
      </p>
      <p style="line-height: 1.8">
        <span
          style="
            color: rgb(66, 66, 66);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
          doming id quod mazim placerat facer possim assum. Typi non habent claritatem
          insitam; est usus legentis in iis qui facit eorum claritatem.
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius.</span
        >
      </p>
      <p style="line-height: 1.8"></p>
      <p style="line-height: 1.8">
        <span
          style="
            color: rgb(66, 66, 66);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >Sincerely,</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: &quot;Courier New&quot;"><br /><br /><br /></span>
      </p>
      <p style="line-height: 1.8">
        <span
          style="
            color: rgb(227, 28, 96);
            font-family: &quot;Courier New&quot;;
            font-size: 10pt;
          "
          >YOUR NAME</span
        >
      </p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.png",
    initialContent: `
      <img
        src="/templates/project-proposal/image1.png"
        wrapperstyle="display: flex"
      />
      <p style="line-height: 1.2"></p>
      <img
        src="/templates/project-proposal/image2.jpg"
        wrapperstyle="display: flex"
      />
      <p style="line-height: 1.2">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 42pt"
          ><strong>Project Name</strong></span
        >
      </p>
      <p style="line-height: 1.2">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 14pt"
          >09.04.20XX</span
        >
      </p>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 18pt"
          ><strong>─</strong></span
        >
      </p>
      <p style="line-height: 1.2">
        <span style="color: rgb(0, 133, 117); font-family: Inter; font-size: 16pt"
          >Your Name</span
        >
      </p>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 14pt"
          >Your Company&nbsp;</span
        >
      </p>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 14pt"
          >123 Your Street</span
        >
      </p>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 14pt"
          >Your City, ST 12345</span
        >
      </p>
      <h1 style="line-height: 1.56">
        <span style="color: rgb(255, 94, 14); font-family: Inter; font-size: 18pt"
          ><strong>Overview</strong></span
        >
      </h1>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 11pt"
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</span
        >
      </p>
      <h1 style="line-height: 1.56">
        <span style="color: rgb(255, 94, 14); font-family: Inter; font-size: 18pt"
          ><strong>Goals</strong></span
        >
      </h1>
      <ol>
        <li>
          <p style="line-height: 1.44">
            <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 11pt"
              >Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: 1.44">
            <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 11pt"
              >Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.</span
            >
          </p>
        </li>
      </ol>
      <h1 style="line-height: 1.56">
        <span style="color: rgb(255, 94, 14); font-family: Inter; font-size: 18pt"
          ><strong>Specifications</strong></span
        >
      </h1>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 11pt"
          >Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
          doming id quod mazim placerat facer possim assum. Typi non habent claritatem
          insitam; est usus legentis in iis qui facit eorum claritatem.
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius.</span
        >
      </p>
      <h2 style="line-height: 1.2">
        <span style="color: rgb(0, 133, 117); font-family: Inter; font-size: 16pt"
          >Lorem Ipsum</span
        >
      </h2>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 11pt"
          >Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
          et accumsan.</span
        >
      </p>
      <h1 style="line-height: 1.56">
        <span style="color: rgb(255, 94, 14); font-family: Inter; font-size: 18pt"
          ><strong>Milestones</strong></span
        >
      </h1>
      <ol>
        <li><p style="line-height: normal"></p></li>
      </ol>
      <h2 style="line-height: 1.2">
        <span style="color: rgb(0, 133, 117); font-family: Inter; font-size: 16pt"
          >Lorem ipsum</span
        >
      </h2>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 11pt"
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span
        >
      </p>
      <ol start="2">
        <li><p style="line-height: normal"></p></li>
      </ol>
      <h2 style="line-height: 1.2">
        <span style="color: rgb(0, 133, 117); font-family: Inter; font-size: 16pt"
          >Dolor sit amet</span
        >
      </h2>
      <p style="line-height: 1.44">
        <span style="color: rgb(105, 93, 70); font-family: Inter; font-size: 11pt"
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: Inter"><br /></span>
      </p>
    `,
  },
  {
    id: "privacy-policy",
    label: "Privacy Policy",
    imageUrl: "/privacy-policy.png",
    initialContent: `
      <p style="line-height: normal; text-align: center">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 16pt;
          "
          ><strong>PRIVACY POLICY TEMPLATE</strong></span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: 1.2; text-align: center">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 14pt;
          "
          ><strong>INSTRUCTIONS</strong></span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 14px;
          "
          ><strong>Overview</strong></span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 10pt;
          "
          >Privacy Policies are agreements that specify what type of data a website
          collects from users and how that data will be used. Known as “personal
          information” or “personally identifiable information,” regulated data
          typically includes anything that can be used to identify an individual, and
          is not limited to a user’s name. Personal information may include a user’s
          address, date of birth, marital status, contact information, ID issue and
          expiration date, financial records, credit information, medical history,
          where one travels, and intentions to acquire goods and services, among
          others.&nbsp;</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 10pt;
          "
          >&nbsp;</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 10pt;
          "
          >While no single federal law requires that websites have a Privacy Policy,
          the sum of federal and state legislation suggest that you should.
          Regulations vary by geographical region and jurisdiction as well as by
          subject matter so be sure to check local laws when drafting your Policy.
          Privacy Policies should be updated whenever a change occurs in the way a
          website collects or utilizes user information.&nbsp;</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 10pt;
          "
          >Consider linking your Privacy Policy with your Terms of Use to ensure
          cohesive application of relevant laws. If you would like to be more specific
          with your users, consider a Data Usage Policy or Data Usage
          Statement.&nbsp;</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 14px;
          "
          ><strong>Instructions</strong></span
        >
      </p>
      <ul>
        <li>
          <p style="line-height: 1.2">
            <span
              style="
                color: rgb(0, 0, 0);
                font-family: &quot;Times New Roman&quot;;
                font-size: 10pt;
              "
              >Delete this first page of instructions before using your template</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: 1.2">
            <span
              style="
                color: rgb(0, 0, 0);
                font-family: &quot;Times New Roman&quot;;
                font-size: 10pt;
              "
              >Fields [in brackets] are placeholders for your information</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: 1.2">
            <span
              style="
                color: rgb(0, 0, 0);
                font-family: &quot;Times New Roman&quot;;
                font-size: 10pt;
              "
              >This template is provided “as is” - please consult your own legal
              counsel before use.</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: 1.2">
            <span
              style="
                color: rgb(0, 0, 0);
                font-family: &quot;Times New Roman&quot;;
                font-size: 10pt;
              "
              >For more detailed instructions for this template, or to find more
              detailed and comprehensive Privacy Policies, visit </span
            ><a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.upcounsel.com/?utm_source=goog-docs&amp;utm_medium=document-template&amp;utm_campaign=privacy-policy"
              ><span
                style="
                  color: rgb(17, 85, 204);
                  font-family: &quot;Times New Roman&quot;;
                  font-size: 10pt;
                "
                ><u>UpCounsel</u></span
              ></a
            >
          </p>
        </li>
      </ul>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 14px;
          "
          ><strong>Disclaimer</strong></span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 8pt;
          "
          >UpCounsel, Inc. is located at 580 Market Street, 5th Floor, San Francisco,
          CA 94104. UpCounsel, Inc. is not a law firm, nor is it a substitute for
          hiring an attorney or a law firm. UpCounsel, Inc. may provide access to
          self-help services at your direction, but
          <em>does not provide legal advice</em>.&nbsp; Nothing herein shall be
          construed as the provision of legal advice. UpCounsel, Inc. cannot and will
          not provide any kind of advice, explanation, opinion, or recommendation to a
          user of this template about possible legal rights, remedies, defenses,
          options, selection of forms or strategies, and nothing herein shall be
          construed as such. The information contained in this template is
          <em>general</em> legal information, and a user should not construe this
          template as legal advice to be applied to a specific factual
          situation.&nbsp; Use of the template contained herein does not create or
          constitute an attorney-client relationship between the user of this template
          and UpCounsel, Inc., its employees, or any other person associated with
          UpCounsel, Inc. The law differs in each legal jurisdiction and may be
          interpreted or applied differently depending on your location or situation.
          As such, you should not rely on the template contained herein without first
          consulting an attorney about your specific situation.</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 8pt;
          "
          >The template contained herein is provided “as is.” UpCounsel, Inc. does not
          provide any express or implied warranties of merchantability, suitability,
          or completeness of the information in this template. You use this template
          at your own risk. Neither UpCounsel, Inc., nor its agents, officers,
          employees, or affiliates, are liable for any direct, indirect, incidental,
          special, exemplary, or consequential damages (including procurement of
          substitute goods or services, loss of use or profits, or business
          interruption), even if UpCounsel, Inc. has been advised of the possibility
          of such damages, on any theory of liability, whether in contract, strict
          liability, or tort, arising in any way out of the use of or inability to use
          this template. Some jurisdictions do not allow the limitation of incidental
          or consequential damages, so this limitation may not apply to you.</span
        >
      </p>
      <p style="line-height: 1.2"></p>
      <hr />
      <p style="line-height: normal"></p>
      <p style="line-height: 1.2; text-align: center">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 12pt;
          "
          ><strong
            >&nbsp;Please remove this instructional page before use</strong
          ></span
        >
      </p>
      <hr />
      <p style="line-height: normal">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 14pt;
          "
          >Privacy Policy Template for a Basic Website with User-Generated
          Content</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11pt;
          "
          >&nbsp;</span
        ><span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >[COMPANY NAME] PRIVACY POLICY</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >[Company Name] (the “Company”) is committed to maintaining robust privacy
          protections for its users.&nbsp; Our Privacy Policy (“Privacy Policy”) is
          designed to help you understand how we collect, use and safeguard the
          information you provide to us and to assist you in making informed decisions
          when using our Service.&nbsp;&nbsp;</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >For purposes of this Agreement, “Site” refers to the Company’s website,
          which can be accessed at [Company URL] [or through our mobile
          application].</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >“Service” refers to the Company’s services accessed via the Site, in which
          users can [description of services].&nbsp;</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >The terms “we,” “us,” and “our” refer to the Company.</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >“You” refers to you, as a user of our Site or our Service.&nbsp;</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >By accessing our Site or our Service, you accept our Privacy Policy and
          Terms of Use (found here: [insert link to Terms of Use]), and you consent to
          our collection, storage, use and disclosure of your Personal Information as
          described in this Privacy Policy.</span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >I. INFORMATION WE COLLECT</span
        ><br />
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11pt;
          "
          >We collect “Non-Personal Information” and “Personal Information.”
          <strong>Non-Personal Information</strong> includes information that cannot
          be used to personally identify you, such as anonymous usage data, general
          demographic information we may collect, referring/exit pages and URLs,
          platform types, preferences you submit and preferences that are generated
          based on the data you submit and number of clicks.
          <strong>Personal Information</strong> includes your email [insert
          specifically what personal information your website collects, i.e. address,
          date of birth, marital status, contact information, etc.], which you submit
          to us through the registration process at the Site.</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11pt;
          "
          >1.</span
        ><span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 7pt;
          "
        >
          &nbsp; </span
        ><span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          ><em>Information collected via Technology</em></span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >To activate the Service you do not need to submit any Personal Information
          other than your email address. To use the Service thereafter, you [do/do
          not] need to submit further Personal Information [,which may include: list
          Personal Information collected]. However, in an effort to improve the
          quality of the Service, we track information provided to us by your browser
          or by our software application when you view or use the Service, such as the
          website you came from (known as the “referring URL”), the type of browser
          you use, the device from which you connected to the Service, the time and
          date of access, and other information that does not personally identify you.
          We track this information using cookies, or small text files which include
          an anonymous unique identifier. Cookies are sent to a user’s browser from
          our servers and are stored on the user’s computer hard drive. Sending a
          cookie to a user’s browser enables us to collect Non-Personal information
          about that user and keep a record of the user’s preferences when utilizing
          our services, both on an individual and aggregate basis. For example, the
          Company may use cookies to collect the following information:</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >· &nbsp; [<em>list typical things you may want to track</em>]</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >The Company may use both persistent and session cookies; persistent cookies
          remain on your computer after you close your session and until you delete
          them, while session cookies expire when you close your browser.&nbsp; [For
          example, we store a persistent cookie to track (_____)].</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11pt;
          "
          >2.</span
        ><span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 7pt;
          "
        >
          &nbsp; </span
        ><span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          ><em>Information you provide us by registering for an account</em></span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >In addition to the information provided automatically by your browser when
          you visit the Site, to become a subscriber to the Service you will need to
          create a personal profile. You can create a profile by registering with the
          Service and entering your email address, and creating a user name and a
          password. By registering, you are authorizing us to collect, store and use
          your email address in accordance with this Privacy Policy.</span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >3. <em>Children’s Privacy</em></span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >The Site and the Service are not directed to anyone under the age of 13.
          The Site does not knowingly collect or solicit information from anyone under
          the age of 13, or allow anyone under the age of 13 to sign up for the
          Service. In the event that we learn that we have gathered personal
          information from anyone under the age of 13 without the consent of a parent
          or guardian, we will delete that information as soon as possible. If you
          believe we have collected such information, please contact us at [Company
          contact email address].&nbsp;</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >II. HOW WE USE AND SHARE INFORMATION</span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          ><em>Personal Information:</em></span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >Except as otherwise stated in this Privacy Policy, we do not sell, trade,
          rent or otherwise share for marketing purposes your Personal Information
          with third parties without your consent. We do share Personal Information
          with vendors who are performing services for the Company, such as the
          servers for our email communications who are provided access to user’s email
          address for purposes of sending emails from us. Those vendors use your
          Personal Information only at our direction and in accordance with our
          Privacy Policy.</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >In general, the Personal Information you provide to us is used to help us
          communicate with you. For example, we use Personal Information to contact
          users in response to questions, solicit feedback from users, provide
          technical support, and inform users about promotional offers.</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >We may share Personal Information with outside parties if we have a
          good-faith belief that access, use, preservation or disclosure of the
          information is reasonably necessary to meet any applicable legal process or
          enforceable governmental request; to enforce applicable Terms of Service,
          including investigation of potential violations; address fraud, security or
          technical concerns; or to protect against harm to the rights, property, or
          safety of our users or the public as required or permitted by
          law.&nbsp;</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          ><em>Non-Personal Information:</em></span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >In general, we use Non-Personal Information to help us improve the Service
          and customize the user experience. We also aggregate Non-Personal
          Information in order to track trends and analyze use patterns on the Site.
          This Privacy Policy does not limit in any way our use or disclosure of
          Non-Personal Information and we reserve the right to use and disclose such
          Non-Personal Information to our partners, advertisers and other third
          parties at our discretion.</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >In the event we undergo a business transaction such as a merger,
          acquisition by another company, or sale of all or a portion of our assets,
          your Personal Information may be among the assets transferred. You
          acknowledge and consent that such transfers may occur and are permitted by
          this Privacy Policy, and that any acquirer of our assets may continue to
          process your Personal Information as set forth in this Privacy Policy. If
          our information practices change at any time in the future, we will post the
          policy changes to the Site so that you may opt out of the new information
          practices. We suggest that you check the Site periodically if you are
          concerned about how your information is used.</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >III. HOW WE PROTECT INFORMATION</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >We implement security measures designed to protect your information from
          unauthorized access. Your account is protected by your account password and
          we urge you to take steps to keep your personal information safe by not
          disclosing your password and by logging out of your account after each use.
          We further protect your information from potential security breaches by
          implementing certain technological security measures including encryption,
          firewalls and secure socket layer technology. However, these measures do not
          guarantee that your information will not be accessed, disclosed, altered or
          destroyed by breach of such firewalls and secure server software. By using
          our Service, you acknowledge that you understand and agree to assume these
          risks.</span
        ><br />
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >IV. YOUR RIGHTS REGARDING THE USE OF YOUR PERSONAL INFORMATION</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >You have the right at any time to prevent us from contacting you for
          marketing purposes.&nbsp; When we send a promotional communication to a
          user, the user can opt out of further promotional communications by
          following the unsubscribe instructions provided in each promotional e-mail.
          You can also indicate that you do not wish to receive marketing
          communications from us in the [list location of opt-out page, i.e.
          “Settings” section] of the Site. Please note that notwithstanding the
          promotional preferences you indicate by either unsubscribing or opting out
          in the [location of opt-out page] of the Site, we may continue to send you
          administrative emails including, for example, periodic updates to our
          Privacy Policy.</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >V. LINKS TO OTHER WEBSITES</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >As part of the Service, we may provide links to or compatibility with other
          websites or applications. However, we are not responsible for the privacy
          practices employed by those websites or the information or content they
          contain. This Privacy Policy applies solely to information collected by us
          through the Site and the Service. Therefore, this Privacy Policy does not
          apply to your use of a third party website accessed by selecting a link on
          our Site or via our Service. To the extent that you access or use the
          Service through or on another website or application, then the privacy
          policy of that other website or application will apply to your access or use
          of that site or application. We encourage our users to read the privacy
          statements of other websites before proceeding to use them.</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >VI. CHANGES TO OUR PRIVACY POLICY</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >The Company reserves the right to change this policy and our Terms of
          Service at any time.&nbsp; We will notify you of significant changes to our
          Privacy Policy by sending a notice to the primary email address specified in
          your account or by placing a prominent notice on our site. Significant
          changes will go into effect 30 days following such notification.
          Non-material changes or clarifications will take effect immediately. You
          should periodically check the Site and this privacy page for updates.</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >VII. &nbsp; &nbsp; &nbsp; &nbsp; CONTACT US</span
        ><span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >If you have any questions regarding this Privacy Policy or the practices of
          this Site, please contact us by sending an email to [Insert Company
          Email].</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >Last Updated: This Privacy Policy was last updated on [Insert Date].</span
        >
      </p>
      <p style="line-height: 1.2">
        <span
          style="
            color: rgb(0, 0, 0);
            font-family: &quot;Times New Roman&quot;;
            font-size: 11.5pt;
          "
          >&nbsp;</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: &quot;Times New Roman&quot;"><br /></span>
      </p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.png",
    initialContent: `
      <p style="line-height: normal">
        <span style="color: rgb(247, 93, 93); font-family: Inter; font-size: 14pt"
          ><strong>Hello</strong></span
        ><span style="color: rgb(204, 204, 204); font-family: Inter; font-size: 14pt"
          ><strong><br /></strong></span
        ><span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 14pt"
          ><strong>I'm Your Name</strong></span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 9pt"
          >123 YOUR STREET</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 9pt"
          >YOUR CITY, ST 12345</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 9pt"
          ><strong>(123) 456-7890</strong></span
        >
      </p>
      <p style="line-height: normal">
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="mailto:NO_REPLY@EXAMPLE.COM"
          ><span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 9pt"
            ><strong>NO_REPLY@EXAMPLE.COM</strong></span
          ></a
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: normal">
        <span style="color: rgb(247, 93, 93); font-family: Inter; font-size: 14pt"
          ><strong>Skills</strong></span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac interdum
          nisi. Sed in consequat mi. Sed pulvinar lacinia felis eu finibus.</span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: normal">
        <span style="color: rgb(247, 93, 93); font-family: Inter; font-size: 14pt"
          ><strong>Experience</strong></span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(102, 102, 102); font-family: Inter; font-size: 9pt"
          >MONTH 20XX - PRESENT</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 11pt"
          ><strong>Company Name, Location</strong><em> - Job Title</em></span
        >
      </p>
      <ul>
        <li>
          <p style="line-height: normal">
            <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: normal">
            <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
              >Aenean ac interdum nisi. Sed in consequat mi.</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: normal">
            <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
              >Sed in consequat mi, sed pulvinar lacinia felis eu finibus.</span
            >
          </p>
        </li>
      </ul>
      <p style="line-height: normal">
        <span style="color: rgb(102, 102, 102); font-family: Inter; font-size: 9pt"
          >MONTH 20XX - MONTH 20XX</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 11pt"
          ><strong>Company Name, Location</strong><em> - Job Title</em></span
        >
      </p>
      <ul>
        <li>
          <p style="line-height: normal">
            <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: normal">
            <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
              >Aenean ac interdum nisi. Sed in consequat mi.&nbsp;</span
            >
          </p>
        </li>
      </ul>
      <p style="line-height: normal">
        <span style="color: rgb(102, 102, 102); font-family: Inter; font-size: 9pt"
          >MONTH 20XX - MONTH 20XX</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 11pt"
          ><strong>Company Name, Location</strong><em> - Job Title</em></span
        >
      </p>
      <ul>
        <li>
          <p style="line-height: normal">
            <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: normal">
            <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
              >Aenean ac interdum nisi. Sed in consequat mi.&nbsp;</span
            >
          </p>
        </li>
        <li>
          <p style="line-height: normal">
            <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
              >Sed pulvinar lacinia felis eu finibus.&nbsp;</span
            >
          </p>
        </li>
      </ul>
      <p style="line-height: normal">
        <span style="color: rgb(247, 93, 93); font-family: Inter; font-size: 14pt"
          ><strong>Education</strong></span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(102, 102, 102); font-family: Inter; font-size: 9pt"
          >MONTH&nbsp; 20XX - MONTH 20XX</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 11pt"
          ><strong>College Name, Location</strong><em> - Degree</em></span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore.</span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: normal">
        <span style="color: rgb(247, 93, 93); font-family: Inter; font-size: 14pt"
          ><strong>Awards</strong></span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Inter; font-size: 10pt"
          >Aenean ac interdum nisi.&nbsp;</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: Inter"><br /></span>
      </p>
    `,
  },
  {
    id: "report",
    label: "Report",
    imageUrl: "/report.png",
    initialContent: `
      <p style="line-height: normal">
        <span style="color: rgb(102, 102, 102); font-family: Verdana; font-size: 14pt"
          >COURSE NAME</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Verdana; font-size: 30pt"
          ><strong>REPORT TITLE</strong></span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Verdana; font-size: 30pt"
          >LOREM IPSUM DOLOR SIT AMET</span
        >
      </p>
      <p style="line-height: normal"></p>
      <img
        src="/templates/report/image1.png"
        wrapperstyle="display: flex"
      />
      <p style="line-height: normal"></p>
      <img
        src="/templates/report/image3.jpg"
        wrapperstyle="display: flex"
      />
      <h1 style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Verdana; font-size: 16pt"
          ><strong>Introduction</strong></span
        >
      </h1>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Verdana; font-size: 11pt"
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
          dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
          dolore eu feugiat nulla facilisis at vero eros et accumsan.</span
        >
      </p>
      <h2 style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Verdana; font-size: 13pt"
          ><strong>Lorem ipsum</strong></span
        >
      </h2>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Verdana; font-size: 11pt"
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
          dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
          dolore eu feugiat nulla facilisis at vero eros et accumsan. Nam liber tempor
          cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
          placerat facer possim assum. Typi non habent claritatem insitam; est usus
          legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt
          lectores legere me lius quod ii legunt saepius.</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Verdana; font-size: 11pt"
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat.</span
        >
      </p>
      <h3 style="line-height: normal">
        <span style="color: rgb(140, 114, 82); font-family: Verdana; font-size: 12pt"
          ><strong>Dolor sit amet</strong></span
        >
      </h3>
      <p style="line-height: normal">
        <span style="color: rgb(0, 0, 0); font-family: Verdana; font-size: 11pt"
          >Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
          doming id quod mazim placerat facer possim assum. Typi non habent claritatem
          insitam; est usus legentis in iis qui facit eorum claritatem.
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
          eros et accumsan.</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: Verdana"><br /></span>
      </p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.png",
    initialContent: `
      <img
        src="/templates/letter/image1.png"
        wrapperstyle="display: flex"
      />
      <p style="line-height: normal"></p>
      <p style="line-height: normal">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          ><strong>Your Name</strong></span
        >
      </p>
      <p style="line-height: 1.2">
        <span style="color: rgb(102, 102, 102); font-family: Inter; font-size: 10pt"
          >123 Your Street</span
        >
      </p>
      <p style="line-height: 1.2">
        <span style="color: rgb(102, 102, 102); font-family: Inter; font-size: 10pt"
          >Your City, ST 12345</span
        >
      </p>
      <p style="line-height: 1.2">
        <span style="color: rgb(102, 102, 102); font-family: Inter; font-size: 10pt"
          >(123) 456-7890</span
        >
      </p>
      <p style="line-height: 1.2">
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="mailto:no_reply@example.com"
          ><span
            style="color: rgb(102, 102, 102); font-family: Inter; font-size: 10pt"
            >no_reply@example.com</span
          ></a
        >
      </p>
      <p style="line-height: 1.2"></p>
      <p style="line-height: 1.8">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >4th September 20XX</span
        >
      </p>
      <p style="line-height: 1.8"></p>
      <p style="line-height: 1.44">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          ><strong>Ronny Reader</strong></span
        >
      </p>
      <p style="line-height: 1.2">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >CEO, Company Name</span
        >
      </p>
      <p style="line-height: 1.2">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >123 Address St&nbsp;</span
        >
      </p>
      <p style="line-height: 1.2">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >Anytown, ST 12345</span
        >
      </p>
      <p style="line-height: 1.2"></p>
      <p style="line-height: 2">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >Dear Ms. Reader,</span
        >
      </p>
      <p style="line-height: normal">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat.</span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: normal">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
          et accumsan.</span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: normal">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
          doming id quod mazim placerat facer possim assum. Typi non habent claritatem
          insitam; est usus legentis in iis qui facit eorum claritatem.
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius.</span
        >
      </p>
      <p style="line-height: normal"></p>
      <p style="line-height: normal">
        <span style="color: rgb(53, 55, 68); font-family: Inter; font-size: 11pt"
          >Sincerely,</span
        >
      </p>
      <p style="line-height: normal">
        <span style="font-family: Inter"><br /><br /><br /></span>
      </p>
      <p style="line-height: 1.44">
        <span style="color: rgb(0, 171, 68); font-family: Inter; font-size: 14pt"
          ><strong>Your Name</strong></span
        >
      </p>
    `,
  },
];

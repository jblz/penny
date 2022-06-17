import { useMutation } from '@apollo/client';
import { getLayoutData } from 'data/getLayoutData';
import { Contact, ContactForm } from 'features/Contact/Contact';
import { GorgiasCreateTicketMutation, GorgiasCreateTicketResponse } from 'features/Contact/queries';
import Layout from 'layouts/Default';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useCallback, useState } from 'react';
import { MutationGorgias_CreateTicketArgs } from 'types/takeshape';

const ContactPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [success, setSuccess] = useState<string>();
  const [createTicket, { error }] = useMutation<
    { Gorgias_createTicket: GorgiasCreateTicketResponse },
    MutationGorgias_CreateTicketArgs
  >(GorgiasCreateTicketMutation);

  const onSubmit = useCallback(
    async (formValues: ContactForm, recaptchaToken: string) => {
      const { firstName, lastName, company, email, phoneNumber, message } = formValues;

      const result = await createTicket({
        variables: {
          email,
          message: `From: ${firstName} ${lastName}
Company: ${company}
Phone Number: ${phoneNumber}
${message}`,
          recaptchaToken
        }
      });
      const { id } = result.data.Gorgias_createTicket;
      if (id) {
        setSuccess(`Thank you for reaching out! Created ticket #${id}.`);
      }
    },
    [createTicket]
  );

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Contact' }}>
      <Contact
        text={{
          primary: 'Get in touch',
          secondary: "We'd be happy to hear from you!",
          button: 'Send'
        }}
        onSubmit={onSubmit}
        success={success}
        error={error?.message}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
}

export default ContactPage;

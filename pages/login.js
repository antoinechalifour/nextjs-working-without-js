import { LoginForm } from "../src/components/LoginForm";

export default function Login({ isFailed }) {
  return (
    <main>
      <LoginForm isFailed={isFailed} />
    </main>
  );
}

export const getServerSideProps = context => ({
  props: { isFailed: 'invalid_credentials' in context.query }
})
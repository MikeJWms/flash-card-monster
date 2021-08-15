import DefaultLayout from "../layouts/DefaultLayout";

export default function SelectedDeckNotFound(props: {
  selectedDeck?: Deck | null;
  history: any;
}) {
  setTimeout(() => {
    props.history.push(`/`);
  }, 3000);
  return (
    <DefaultLayout>
      <p>Uh oh... we can't find this deck! Go back to select another deck.</p>
      <p>You will be automatically redirected in 3 seconds.</p>
    </DefaultLayout>
  );
}

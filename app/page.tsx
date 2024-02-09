import Container from "@/components/Container";
import Formulario from "@/components/Formulario";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-sky-700">
      <Container>
        <Formulario />
      </Container>
    </div>
  );
}

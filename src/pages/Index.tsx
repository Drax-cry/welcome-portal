import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tabbleLogo from "@/assets/tabble-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8">
      <div className="text-center max-w-lg">
        <img 
          src={tabbleLogo} 
          alt="Tabble" 
          className="w-32 h-32 mx-auto mb-8 object-contain"
        />
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Bem-vindo ao Tabble
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sua plataforma de gestão inteligente. Acesse ou crie sua conta para começar.
        </p>
        <Link to="/auth">
          <Button className="h-12 px-8 bg-primary hover:bg-tabble-dark text-primary-foreground font-semibold rounded-xl group">
            Acessar
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;

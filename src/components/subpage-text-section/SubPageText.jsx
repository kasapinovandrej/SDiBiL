import React from "react";
import Subtitle from "../subtitle/Subtitle";
import "./sub-page-text.scss";

const SubPageText = () => {
  return (
    <div className="subpage-text">
      <p className="paragraph">
        Vi erbjuder en fullservicetjänst för däckskifte och hjulförvaring
        (däckhotell). Allt för att göra hjulskifte och däckhantering så smidigt
        som möjligt för dig som kund. I vår fullservicetjänst ingår följande:
      </p>
      <Subtitle
        title="HÄMTNING/LÄMNING AV BIL FRÅN VALFRI ADRESS INOM NORRA STOCKHOLM"
        type="subpage-subtitle"
      />
      <p className="paragraph">
        I samband med bokning på vår hemsida fyller du i den adress som du vill
        att bilen ska bli upphämtad från. Detta kan tex. vara din hemadress,
        arbetsplats eller annan valfri adress. En av våra chaufförer kommer sen
        ringa upp dig ca 30 min innan bokad tid för att stämma av att bil och
        nycklar finns på rätt adress samt komma överens om
        nyckelöverlämning/återlämning. Vanligtvis tar skifte och återlämning av
        bil till samma adress ca 90 minuter. Våra däckskiftare skiftar hjulen på
        din bil samt kontrollerar och justerar lufttrycket. Vi kontrollerar
        mönsterdjup, fabrikat, dimension samt skick på hjulen som ska vidare in
        på hotellet. Vi ser även till att kontrollera och dokumentera ev. skador
        på däck och fälg. Efteråt skickas en fullständig rapport till dig som
        kund så du vet vad som finns i förvaring. Vi tvättar alltid samtliga
        hjul innan dom skickas vidare in på förvaring. Detta för att uppnå
        maximal livslängd på däck och fälg.Däckreparation debiteras 200:- per
        lagning.
      </p>
    </div>
  );
};

export default SubPageText;

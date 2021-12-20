//Tableau de citations
const citationPhilo = ["La vie sans musique est tout simplement une erreur, une fatigue, un exil.<i>-Friedrich Nietzsche</i>", "On ne peut comprendre la vie qu'en regardant en arrière ; on ne peut la vivre qu'en regardant en avant. <i> -Sören Kierkegaard</i>", "Etre libre, ce n'est pas pouvoir faire ce que l'on veut, mais c'est vouloir ce que l'on peut.<i> -Jean-Paul Sartre", "Celui qui sait qu'il ne sait pas, éduque-le. Celui qui sait qu'il sait, écoute le. Celui qui ne sait pas qu'il sait, éveille-le. Celui qui ne sait pas qu'il ne sait pas, fuis-le.<i>-Proverbe chinois</i>", "Le coeur a ses raisons que la raison ne connaît pas.<i>-Blaise Pascal</i>", "Le fait que l'homme distingue le bien du mal prouve sa supériorité intellectuelle par rapport à toute autre créature, mais le fait qu'il puisse mal agir prouve l'infériorité de son esprit.<i>-Mark Twain</i>", "Je pense, donc je suis.<i>-René Descartes</i>", "Ni aimer, ni haïr : voilà la moitié de toute sagesse. Ne rien dire et ne rien croire : voilà l'autre.<i>-Arthur Schopenhauer</i>", "Il y a deux façons de se tromper : L'une est de croire ce qui n'est pas, L'autre de refuser de croire ce qui est.<i>-Sören Kierkegaard</i>", "Si un âne te donne un coup de pied, ne lui rends pas.<i>-Socrate</i>", "Le mal vient de ce que l'homme se trompe au sujet du bien.<i>-Socrate</i>", "Faire le bien sans chercher de récompense, fuir le mal sans craindre le châtiment : homme rare sous le ciel.<i> -Confucius", "On ne fait pas ce qu'on veut et cependant on est responsable de ce qu'on est.<i>-Jean-Paul Sartre</i>", "La vie n'est pas un problème à résoudre mais une réalité dont il faut faire l'expérience.<i>-Sören Kierkegaard</i>", "Nous appellerons émotion une chute brusque de la conscience dans le magique.<i>-Jean-Paul Sartre</i>", "Comme le premier pas vers le bien est de ne point faire de mal, le premier pas vers le bonheur est de ne point faire souffrir.<i>-Jean-Jacques Rousseau</i>", "Nous appellerons émotion une chute brusque de la conscience dans le magique.<i>-Jean-Paul Sartre</i>", "Tous les yeux regardent, peu observent, très peu voient.<i>-Albert Sanchez Pinol</i>", "L'essentiel n'est pas de vivre, mais de bien vivre.<i>-Platon</i>", "Généralement, les gens qui savent peu parlent beaucoup, et les gens savent beaucoup parlent peu.<i>-Jean-Jacques Rousseau</i>", "Celui qui en sait beaucoup sur les autres est peut-être instruit, mais celui qui se comprend lui-même est plus intelligent.<i>-Lao-Tseu</i>", "Deviens ce que tu es. Fais ce que toi seul peut faire.<i>-Friedrich Nietzsche</i>", "Grâce à sa détermination, son attention, sa modération et sa maîtrise de lui-même, le sage crée une île qu'aucun raz-de-marée ne saurait submerger.<i>-Bouddha - Le Dhammapada</i>", "Le monde de la réalité a ses limites, le monde de l'imagination est sans frontières.<i>-Jean-Jacques Rousseau</i>", "L'amour est une étoffe tissée par la nature et brodée par l'imagination.<i>-Voltaire</i>", "L'âme trouve son repos en dormant peu, le coeur dans le peu d'inquiétudes et la langue dans le silence.<i> -Platon</i>", "Lorsqu'une question soulève des opinions violemment contradictoires, on peut assurer qu'elle appartient au domaine de la croyance et non à celui de la connaissance.<i> -Voltaire</i>", "Il faut se connaître soi-même : quand cela ne servirait pas à trouver le vrai, cela au moins sert à régler sa vie, et il n'y a rien de plus juste.<i>-Blaise Pascal</i>", "Le mal est facile, le bien demande beaucoup d'efforts.<i>-Théognis de Mégare</i>", "L'ambition de faire le bien est la seule qui compte.<i>-Robert Baden-Powell</i>"]

const proverbeMonde = ["L'élève cherche toujours à voir avant d'y croire, le maître lui y croit toujours avant de voir.<i>-Proverbe asiatique</i>", "L'optimisme vient de Dieu, le pessimisme est né dans le cerveau de l'homme.<i>-Proverbe arabe</i>", "Si tu veux être heureux pendant une heure, fais une sieste. Si tu veux être heureux pendant une journée, va à la pêche. Si tu veux être heureux toute la vie, aide ton prochain.<i>-Proverbe chinois</i>", "Qui s'instruit sans agir, laboure sans semer.<i>-Proverbe arabe</i>", "Les hommes dorment séparément, mais ont les mêmes rêves.<i>-Proverbe africain</i>", "Avec un mensonge, on va très loin, mais sans espoir de revenir en arrière.<i>-Proverbe juif</i>", "Quand on est plein, on ne trouvera pas un goût au pain.<i>-Proverbe suisse</i>", "Si tu ne peux pas sourire, n'ouvre pas de boutique.<i>-Proverbe écossais</i>", "Dieu donne la nourriture aux oiseaux, mais il faut voler pour l'obtenir.<i>-Proverbe japonais</i>", "Ne crache pas dans le puits, car tu auras peut-être un jour besoin d'en boire.<i>Proverbe irlandais</i>", "L'amour et le parfum ne se cachent pas.<i>-Proverbe Italien</i>", "L'amour qui se nourrit de cadeaux restera toujours affamé.<i>Proverbe espagnol</i>", "On ne peut pas labourer, semer, récolter et manger le même jour.<i>-Proverbe Africain</i>", "Tant que les lions n'auront pas leurs propres historiens, les histoires de chasse ne peuvent que chanter la gloire du chasseur.<i>-Proverbe Africain</i>", "L'herbe qui pousse et s'accroche au mur fait moins de bruit que le mur qui s'effondre.<i>-Proverbe Chilien</i>", "Le serpent change de peau, non de nature.<i>-Proverbe persan</i>", "Oublier ses ancêtres, c'est être un ruisseau sans source, un arbre sans racines.<i>Proverbe chinois</i>", "La valeur de la jeunesse, c'est un vieux qui te la donnera. - La valeur de la richesse, c'est un pauvre qui te la donnera. - La valeur de la vie, c'est un mort qui te la donnera.<i>-Proverbe Arabe</i>", "L'étranger est un ami que l'on n'a pas encore rencontré.<i>-Proverbe irlandais</i>", "Celui qui se lève tard ne voit pas le lézard en train de se brosser les dents.<i>Proverbe masaï</i>"]

//Les éléments requis du générateur de citations
var body = document.querySelector("body");
var btnCitation = document.getElementById("btn-citation-js");
var optionCitation = document.getElementById("option-citation-js");
var citation = document.getElementById("citation-js");
var citationText = document.getElementById("citation-text-js");


//Au chargement de la page une citation philosophique sera affichée
window.addEventListener("DOMContentLoaded", function () {
    citationText.innerHTML = citationPhilo[Math.floor(Math.random() * citationPhilo.length)];
});
//Génère les citations et change la couleur d'arrière plan selon la selection
btnCitation.addEventListener("click", function () {
    if (optionCitation.value === "philo") {
        citationText.innerHTML = citationPhilo[Math.floor(Math.random() * citationPhilo.length)];
        citation.style.border = "none";

    } else {
        citationText.innerHTML = proverbeMonde[Math.floor(Math.random() * proverbeMonde.length)];
        citation.style.border = "2px solid rgb(97, 125, 152)";
    }
});












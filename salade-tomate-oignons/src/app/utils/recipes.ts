type Recipe = {
  id: number;
  name: string;
  ingredients: Map<string, number>;
  instructions: string[];
  preparationTime: number;
  difficulty: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Salade Tricolore Provençale',
    ingredients: new Map([
      ['Salade', 1],
      ['Tomates', 2],
      ['Oignons', 1],
      ['Vinaigrette', 1]
    ]),
    instructions: [
      'Laver et couper la salade',
      'Couper les tomates en quartiers',
      'Émincer les oignons',
      'Mélanger le tout dans un saladier',
      'Ajouter la vinaigrette et mélanger'
    ],
    preparationTime: 15,
    difficulty: 'Facile'
  },
  {
    id: 2,
    name: 'Symphonie de Légumes du Soleil',
    ingredients: new Map([
      ['Aubergines', 1],
      ['Courgettes', 2],
      ['Poivrons', 2],
      ['Tomates', 3],
      ['Oignons', 1],
      ['Ail', 2],
      ['Huile d\'olive', 1]
    ]),
    instructions: [
      'Couper tous les légumes en dés',
      'Faire revenir les oignons et l\'ail dans l\'huile d\'olive',
      'Ajouter les autres légumes et laisser mijoter',
      'Assaisonner selon votre goût',
      'Cuire à feu doux pendant 45 minutes'
    ],
    preparationTime: 60,
    difficulty: 'Moyen'
  },
  {
    id: 3,
    name: 'Tarte Rustique aux Lardons et Crème',
    ingredients: new Map([
      ['Pâte brisée', 1],
      ['Lardons', 200],
      ['Oeufs', 3],
      ['Crème fraîche', 200],
      ['Fromage râpé', 100]
    ]),
    instructions: [
      'Préchauffer le four à 180°C',
      'Étaler la pâte dans un moule',
      'Faire revenir les lardons',
      'Mélanger les oeufs, la crème et le fromage',
      'Ajouter les lardons au mélange',
      'Verser sur la pâte et enfourner pour 30-35 minutes'
    ],
    preparationTime: 45,
    difficulty: 'Moyen'
  }
  ,
  {
    id: 4,
    name: 'Volaille Bourguignonne au Vin Rouge',
    ingredients: new Map([
      ['Poulet', 1],
      ['Vin rouge', 750],
      ['Lardons', 200],
      ['Champignons', 300],
      ['Oignons', 2],
      ['Ail', 4],
      ['Carottes', 3],
      ['Bouquet garni', 1],
      ['Beurre', 50],
      ['Farine', 2]
    ]),
    instructions: [
      'Faire mariner le poulet dans le vin rouge pendant 4 heures',
      'Faire revenir les lardons, puis réserver',
      'Dans la même cocotte, faire dorer le poulet de tous côtés',
      'Ajouter les oignons, l\'ail et les carottes, faire suer',
      'Saupoudrer de farine, puis remettre les lardons',
      'Verser le vin de la marinade et ajouter le bouquet garni',
      'Laisser mijoter à feu doux pendant 1h30',
      'Faire sauter les champignons au beurre et les ajouter en fin de cuisson',
      'Ajuster l\'assaisonnement et servir bien chaud'
    ],
    preparationTime: 120,
    difficulty: 'Difficile'
  },
  {
    id: 5,
    name: 'Nuage de Fromage Aérien',
    ingredients: new Map([
      ['Oeufs', 6],
      ['Fromage râpé', 150],
      ['Beurre', 50],
      ['Farine', 50],
      ['Lait', 500],
      ['Muscade', 1],
      ['Sel', 1],
      ['Poivre', 1]
    ]),
    instructions: [
      'Préchauffer le four à 180°C',
      'Préparer une béchamel avec le beurre, la farine et le lait',
      'Ajouter le fromage râpé et laisser refroidir',
      'Séparer les blancs des jaunes d\'oeufs',
      'Incorporer les jaunes à la béchamel refroidie',
      'Monter les blancs en neige et les incorporer délicatement',
      'Verser dans un moule à soufflé beurré',
      'Enfourner pour 30-35 minutes sans ouvrir le four',
      'Servir immédiatement à la sortie du four'
    ],
    preparationTime: 60,
    difficulty: 'Difficile'
  },
  {
    id: 6,
    name: 'Élixir Marin Provençal',
    ingredients: new Map([
      ['Poissons variés', 1500],
      ['Pommes de terre', 500],
      ['Fenouil', 1],
      ['Tomates', 4],
      ['Oignons', 2],
      ['Ail', 6],
      ['Safran', 1],
      ['Huile d\'olive', 100],
      ['Bouquet garni', 1],
      ['Pain', 1]
    ]),
    instructions: [
      'Préparer un bouillon avec les têtes et arêtes de poissons',
      'Faire revenir les oignons, l\'ail et le fenouil dans l\'huile d\'olive',
      'Ajouter les tomates, le safran et le bouquet garni',
      'Verser le bouillon et laisser mijoter 15 minutes',
      'Ajouter les pommes de terre et cuire 15 minutes de plus',
      'Ajouter les poissons coupés en morceaux',
      'Laisser cuire à feu doux pendant 10-15 minutes',
      'Préparer des croûtons frottés à l\'ail',
      'Servir la soupe avec les croûtons et une rouille'
    ],
    preparationTime: 90,
    difficulty: 'Difficile'
  },
  {
    id: 7,
    name: 'Tarte Renversée aux Pommes Caramélisées',
    ingredients: new Map([
      ['Pommes', 8],
      ['Sucre', 150],
      ['Beurre', 60],
      ['Pâte feuilletée', 1],
      ['Cannelle', 1]
    ]),
    instructions: [
      'Préchauffer le four à 180°C',
      'Éplucher et couper les pommes en quartiers',
      'Faire un caramel avec le sucre dans un moule à tarte',
      'Disposer les pommes en rosace sur le caramel',
      'Parsemer de beurre et de cannelle',
      'Cuire à feu doux pendant 15 minutes',
      'Recouvrir de pâte feuilletée en rentrant les bords',
      'Enfourner pour 25-30 minutes',
      'Laisser tiédir avant de retourner sur un plat de service'
    ],
    preparationTime: 60,
    difficulty: 'Moyen'
  },
  {
    id: 8,
    name: 'Festin Languedocien aux Haricots Blancs',
    ingredients: new Map([
      ['Haricots blancs', 500],
      ['Confit de canard', 4],
      ['Saucisses de Toulouse', 4],
      ['Lardons', 200],
      ['Oignons', 2],
      ['Ail', 4],
      ['Tomates', 3],
      ['Bouquet garni', 1],
      ['Chapelure', 50]
    ]),
    instructions: [
      'Faire tremper les haricots la veille',
      'Cuire les haricots avec le bouquet garni',
      'Faire revenir les lardons, les saucisses et le confit',
      'Préparer un sofrito avec les oignons, l\'ail et les tomates',
      'Mélanger tous les ingrédients dans une cassole',
      'Recouvrir de chapelure',
      'Enfourner à 150°C pendant 3 heures en arrosant régulièrement',
      'Servir bien chaud directement dans la cassole'
    ],
    preparationTime: 240,
    difficulty: 'Difficile'
  },
  {
    id: 9,
    name: 'Millefeuille de Pommes de Terre à la Crème',
    ingredients: new Map([
      ['Pommes de terre', 1000],
      ['Crème fraîche', 500],
      ['Lait', 250],
      ['Ail', 2],
      ['Beurre', 30],
      ['Fromage râpé', 100],
      ['Muscade', 1],
      ['Sel', 1],
      ['Poivre', 1]
    ]),
    instructions: [
      'Préchauffer le four à 180°C',
      'Éplucher et couper les pommes de terre en fines rondelles',
      'Frotter un plat à gratin avec de l\'ail et le beurrer',
      'Disposer les pommes de terre en couches',
      'Mélanger la crème, le lait, la muscade, le sel et le poivre',
      'Verser le mélange sur les pommes de terre',
      'Parsemer de fromage râpé',
      'Enfourner pour 1h30 à 2h jusqu\'à ce que le dessus soit doré',
      'Laisser reposer 10 minutes avant de servir'
    ],
    preparationTime: 120,
    difficulty: 'Moyen'
  },
  {
    id: 10,
    name: 'Tendreté de Boeuf au Nectar de Bourgogne',
    ingredients: new Map([
      ['Boeuf', 1000],
      ['Vin rouge', 750],
      ['Lardons', 200],
      ['Champignons', 300],
      ['Oignons', 12],
      ['Carottes', 3],
      ['Ail', 4],
      ['Bouquet garni', 1],
      ['Beurre', 50],
      ['Farine', 2]
    ]),
    instructions: [
      'Faire mariner le boeuf dans le vin rouge pendant une nuit',
      'Faire revenir les lardons, puis réserver',
      'Saisir la viande de tous côtés, puis réserver',
      'Faire revenir les oignons et les carottes',
      'Remettre la viande, saupoudrer de farine',
      'Mouiller avec le vin de la marinade',
      'Ajouter l\'ail, le bouquet garni et les lardons',
      'Laisser mijoter à feu doux pendant 3 heures',
      'Faire sauter les champignons et les ajouter en fin de cuisson',
      'Servir avec des pommes de terre vapeur ou des tagliatelles'
    ],
    preparationTime: 240,
    difficulty: 'Difficile'
  },
  {
    id: 11,
    name: 'Dentelles Dorées à l\'Essence d\'Orange',
    ingredients: new Map([
      ['Farine', 250],
      ['Oeufs', 4],
      ['Lait', 500],
      ['Beurre', 50],
      ['Sucre', 50],
      ['Grand Marnier', 50],
      ['Oranges', 3]
    ]),
    instructions: [
      'Préparer la pâte à crêpes et laisser reposer 1 heure',
      'Cuire les crêpes dans une poêle beurrée',
      'Préparer le beurre Suzette : mélanger beurre, sucre et zestes d\'orange',
      'Faire fondre le beurre Suzette dans une poêle',
      'Ajouter le jus d\'orange et le Grand Marnier',
      'Plonger les crêpes dans la sauce et les plier en quatre',
      'Laisser caraméliser quelques instants',
      'Flamber avec un peu de Grand Marnier supplémentaire',
      'Servir immédiatement'
    ],
    preparationTime: 90,
    difficulty: 'Moyen'
  },
  {
    id: 12,
    name: 'Délice Crémeux de Veau à la Parisienne',
    ingredients: new Map([
      ['Veau', 1000],
      ['Carottes', 3],
      ['Oignons', 2],
      ['Champignons', 300],
      ['Crème fraîche', 200],
      ['Beurre', 50],
      ['Farine', 50],
      ['Bouquet garni', 1],
      ['Citron', 1],
      ['Jaunes d\'oeufs', 2]
    ]),
    instructions: [
      'Faire blanchir la viande dans l\'eau bouillante',
      'Préparer un bouillon avec les os et les parures',
      'Faire suer les oignons et les carottes',
      'Ajouter la viande, le bouillon et le bouquet garni',
      'Laisser mijoter à feu doux pendant 1h30',
      'Préparer un roux blanc avec le beurre et la farine',
      'Lier la sauce avec le roux',
      'Ajouter les champignons et cuire 10 minutes de plus',
      'Hors du feu, incorporer la crème et les jaunes d\'oeufs',
      'Ajouter le jus de citron et servir avec du riz'
    ],
    preparationTime: 120,
    difficulty: 'Moyen'
  },
  {
    id: 13,
    name: 'Dôme Citronné aux Nuages de Meringue',
    ingredients: new Map([
      ['Pâte sablée', 1],
      ['Citrons', 4],
      ['Oeufs', 4],
      ['Sucre', 200],
      ['Beurre', 100],
      ['Maïzena', 30]
    ]),
    instructions: [
      'Préchauffer le four à 180°C',
      'Foncer un moule avec la pâte sablée et la précuire',
      'Préparer la crème au citron : jus et zestes, oeufs, sucre, beurre',
      'Cuire la crème au bain-marie jusqu\'à épaississement',
      'Verser la crème sur le fond de tarte et laisser refroidir',
      'Préparer une meringue italienne',
      'Recouvrir la tarte de meringue en formant des pics',
      'Enfourner quelques minutes pour dorer la meringue',
      'Laisser refroidir avant de déguster'
    ],
    preparationTime: 90,
    difficulty: 'Difficile'
  }
];

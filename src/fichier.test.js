// Import des outils nécessaires pour tester le composant React
import { render, screen } from '@testing-library/react';
import Fichier from './fichier'; // Assurez-vous que le chemin est correct

describe('Fichier Component', () => {
  test('devrait afficher le message de bienvenue', () => {
    // Rendu du composant Fichier
    render(<Fichier />);

    // Vérifier si le titre "Bienvenue dans mon application React!" est présent dans le DOM
    const welcomeMessage = screen.getByText(/Bienvenue dans mon application React!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('devrait afficher le texte provenant du fichier fichier.js', () => {
    // Rendu du composant Fichier
    render(<Fichier />);

    // Vérifier si le texte spécifique est présent dans le DOM
    const paragraphText = screen.getByText(/Ce message provient du fichier `fichier.js`./i);
    expect(paragraphText).toBeInTheDocument();
  });
});



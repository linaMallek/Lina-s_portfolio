# Programme du Simplexe avec méthode Big-M
# Partie 1: Entrée des données
def saisie_donnees():
    """Fonction pour saisir les données du problème de programmation linéaire"""
    print("Saisie des données du problème de programmation linéaire")
    n = int(input("Entrez le nombre de variables de décision: "))
    m = int(input("Entrez le nombre de contraintes: "))
    
    # Saisie de la fonction objectif
    print("\nSaisie des coefficients de la fonction objectif:")
    z = []
    for j in range(n):
        coef = float(input(f"Coefficient de x{j+1}: "))
        z.append(coef)
    
    # Saisie des contraintes
    print("\nSaisie des contraintes:")
    contraintes = []
    signes = []
    b = []
    
    for i in range(m):
        print(f"\nContrainte {i+1}:")
        ligne = []
        for j in range(n):
            coef = float(input(f"Coefficient de x{j+1}: "))
            ligne.append(coef)
        signe = input("Signe de la contrainte (>=, <= ou =): ")
        val = float(input("Valeur du second membre: "))
        
        contraintes.append(ligne)
        signes.append(signe)
        b.append(val)
    
    return n, m, z, contraintes, signes, b

# Partie 2: Corps du code - Préparation du tableau initial avec Big-M
def preparer_tableau_initial(n, m, z, contraintes, signes, b):
    """Préparation du tableau initial du simplexe avec la méthode Big-M"""
    M = 1000  # Valeur pour Big-M
    
    # Compter les variables additionnelles nécessaires
    nb_vars_slack = sum(1 for s in signes if s == "<=")
    nb_vars_surplus = sum(1 for s in signes if s == ">=")
    nb_vars_artif = sum(1 for s in signes if s in [">=", "="])
    
    # Créer le tableau initial
    total_cols = n + nb_vars_slack + nb_vars_surplus + nb_vars_artif + 1
    total_rows = m + 1
    tableau = [[0.0 for _ in range(total_cols)] for _ in range(total_rows)]
    
    # Remplir la fonction objectif (première ligne)
    for j in range(n):
        tableau[0][j] = -z[j]
    
    # Position actuelle pour l'ajout des variables
    pos_courante = n
    
    # Remplir les contraintes
    for i in range(m):
        # Coefficients des variables originales
        for j in range(n):
            tableau[i+1][j] = contraintes[i][j]
        
        # Ajouter les variables selon le type de contrainte
        if signes[i] == "<=":
            tableau[i+1][pos_courante] = 1
            pos_courante += 1
        elif signes[i] == ">=":
            tableau[i+1][pos_courante] = -1  # Variable de surplus
            tableau[i+1][pos_courante+1] = 1  # Variable artificielle
            tableau[0][pos_courante+1] = M  # Coefficient M dans la fonction objectif
            pos_courante += 2
        elif signes[i] == "=":
            tableau[i+1][pos_courante] = 1  # Variable artificielle
            tableau[0][pos_courante] = M  # Coefficient M dans la fonction objectif
            pos_courante += 1
        
        # Second membre
        tableau[i+1][-1] = b[i]
    
    return tableau

# Partie 3: Affichage du tableau
def afficher_tableau(tableau):
    """Affichage du tableau du simplexe"""
    print("\nTableau du simplexe:")
    for ligne in tableau:
        for val in ligne:
            print(f"{val:10.2f}", end=" ")
        print()

# Programme principal
if __name__ == "__main__":
    print("PROGRAMME DE RÉSOLUTION DU SIMPLEXE AVEC MÉTHODE BIG-M")
    print("====================================================")
    
    # Étape 1: Saisie des données
    n, m, z, contraintes, signes, b = saisie_donnees()
    
    # Étape 2: Préparation du tableau initial
    tableau_initial = preparer_tableau_initial(n, m, z, contraintes, signes, b)
    
    # Étape 3: Affichage du tableau initial
    print("\nTableau initial du simplexe avec méthode Big-M:")
    afficher_tableau(tableau_initial)
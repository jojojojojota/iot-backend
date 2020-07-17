# Wald
Un framework web minimaliste basé sur express
# Important
Attention d'origine cette surcouche est un test que j'ai au final publié, si vous décidez de l'utiliser il faut prendre en compte que ce système est susceptible de subir de lourdes modifications. Ce sera donc à vos risque et péril.
# Fonctionnement
Dans le dossier controller il suffit d'ajouter un nouveau .ts similaire au .ts déjà existant puis ensuite il faut ajouter les routes dans route.ts (le tout dans le dossier src)
# Logique
En l'état il n'existe pas vraiment de middleware par contre la méthode index des contrôleurs de route n'est pas forcément une méthode de render et peut-être utilisé pour exécuter d'autres parties de code avant d'exécuter une méthode de render qui renvoie la page définitive, la structure sera déterminé par votre manière de coder et votre logique, il est tout à fait possible de tout mettre dans le contrôleur ou de créer des contrôleurs par fonctionnalité (authentification) qui seront appelés dans le contrôleur de vue.
# Forge
Le forge est un simple script js qui s'occupe de créer les controleurs et vue avec l'aide d'une commande.
```
Cette commande crée le controleur ainsi que la vue pug
node forge controller/vue nom

Cette commande crée uniquement le controleur et le fait pointer sur index
node forge controller nom
```

> La perfection commence par la perte de la masse capilaire inutile.
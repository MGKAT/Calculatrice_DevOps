# Utilisation d'une image Nginx comme image de base
FROM nginx:alpine

# Copiez les fichiers de votre application dans le répertoire de Nginx
COPY . /usr/share/nginx/html

# Exposez le port 80 pour accéder à l'application
EXPOSE 80

# Démarrer Nginx en mode premier plan
CMD ["nginx", "-g", "daemon off;"]

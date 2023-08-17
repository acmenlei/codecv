# Use httpd:2.4-alpine image as the base image
FROM httpd:2.4-alpine

# Maintainer information
MAINTAINER tanwenyang@aliyun.com

# Copy the codecv file from the local directory to the /usr/local/apache2/htdocs/ directory inside the container
COPY ./dist/ /usr/local/apache2/htdocs/

# Expose port 80 of the container and allow external access to this port
EXPOSE 80

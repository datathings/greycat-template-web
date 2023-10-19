FROM docker.io/library/busybox:1.36.1-glibc
ADD x64-linux.tar.gz /
RUN rm /.env
VOLUME /gcdata
EXPOSE 8080
ENV GREYCAT_LOGFILE=true
ENV GREYCAT_WEBROOT=/webroot
ENV GREYCAT_PORT=8080
ENV GREYCAT_MODE=serve
CMD ["/greycat"]

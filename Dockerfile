FROM docker.io/library/busybox:1.36.1-glibc
ADD x64-linux.tar.gz /
VOLUME /gcdata
EXPOSE 8080
ENV GREYCAT_LOGFILE=true
ENV GREYCAT_WEBROOT=/webroot
ENV GREYCAT_PORT=8080
ENV GREYCAT_MODE=serve
CMD ["/bin/greycat"]
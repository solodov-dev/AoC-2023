#include <stdio.h>

int main(void) {
  char *line = NULL;
  size_t len = 0;

  while (getline(&line, &len, stdin) != -1) {
    printf("%s", line);
  }
}

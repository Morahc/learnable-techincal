from collections import Counter

def nth_most_rate(list, n):
  my_counter = Counter(list)
  nth_rarest = my_counter.most_common()[::-1][n-1][0]

  return nth_rarest

from typing import ItemsView
from functools import cmp_to_key

def char_count(string):
  split_string = sorted(string.replace(" ", ""))
  dictionary_count = {}

  for i in range(0, len(split_string), 1):
      if (split_string[i]) in dictionary_count :
        dictionary_count[split_string[i]] += 1
      else :
        dictionary_count[split_string[i]] = 1

  list_of_dict = []

  for key in dictionary_count :
      list_of_dict.append(  [key,dictionary_count[key]]    )

  def sort_by_count(a,b): 
    if a[1] - b[1] > 0: 
      return -1
    elif a[1] - b[1] < 0: 
      return 1
    elif a[1] == b[1]:
      return 1 if a[0] > b[0] else -1

  sorted_dict = sorted(list_of_dict, key = cmp_to_key(sort_by_count))

  return sorted_dictld
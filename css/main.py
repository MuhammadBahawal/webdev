buffer_size = 10
buffer = [None] * buffer_size
in_index = 0
out_index = 0
item = "Example Item"

while True:
    while (in_index + 1) % buffer_size == out_index:
        print("Buffer is full. Waiting...")
    
    buffer[in_index] = item
    print(f"Added item to buffer at index {in_index}")
    
    in_index = (in_index + 1) % buffer_size
    
    if input("Continue? (y/n): ") != "y":
        break

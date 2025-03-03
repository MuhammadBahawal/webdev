while(true)
{

    while (((in = (in + 1) % buffer_size) == out))
    {
    }

    buffer[in] = item;

    in = (in + 1) % buffer_size;
}

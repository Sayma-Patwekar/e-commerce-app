CREATE DATABASE shopsmart;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price NUMERIC(10,2),
    image_url TEXT
);

INSERT INTO products(name, description, price, image_url) VALUES
('iPhone 14', 'Apple smartphone', 799, 'https://example.com/iphone.jpg'),
('Samsung TV', '4K UHD Smart TV', 999, 'https://example.com/tv.jpg'),
('Nike Shoes', 'Running Shoes', 120, 'https://example.com/shoes.jpg');

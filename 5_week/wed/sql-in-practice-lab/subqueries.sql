-- Q1
SELECT * 
FROM invoice
WHERE invoice_id IN (
  SELECT invoice_id 
  FROM invoice_line
  WHERE unit_price > 0.99
  );

-- Q2
select * 
from playlist_track
where playlist_id in (
    select playlist_id
    from playlist
    where name = 'Music');

-- Q3
select name 
from track
where track_id in (
	select track_id 
    from playlist_track
	where playlist_id = 5);

-- Q4
select name
from track
where genre_id in (
	select genre_id 
    from genre
	where name = 'Comedy');

-- Q5
select name
from track
where album_id in (
	select album_id
    from album
	where title = 'Fireball');

-- Q6
select name
from track
where album_id in (
	select album_id
    from album
	where artist_id in (
        select artist_id 
        from artist
        where name = 'Queen'));
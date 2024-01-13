redis/redis-stack contains both Redis Stack server and RedisInsight. This container is best for local development because you can use the embedded RedisInsight to visualize your data.

>> docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

>> docker -ps

>> docker exec -it b84927923 bash

>> redis-cli

----------

Redis Datatype:- 

 1 . "Redis String" 

 (Now we can play with redis cli)

 >> set name Sumit

 >> get name

 Good Practice to set a name ( <entity>:<key> )

 >> set user:1 Sumit

 >> set user:2 Riya

 >> set user:3 Rahul


- nx command check if there is already a key present in the redis. If it is not present then only it will set a new value, otherwise it will not execute

 >> set user:1 new_value nx
 
 This above command will not execute uf user:1 is already present

 - mget command is used to fetch multiple keys together

 >> mget user:1 user:2 msg:1

 - mset command is used to set multiple keys value

 >> mset key:1 value key:2 value2

 - incr command increment the value of the key by default by 1 and if set by a particular step

 >> incr key 

 >> incr key 11


2. Redis List

lpush, rpush, lpop, rpop, llen

lrange command is used to get the list (lrange < key > start_index end_index)

>> lrange messages 0 -1 

del keyword will delete any key

>> del messages

N.B: To find all the keys or search keys we can use KEYS < Pattern>

>> KEYS User:*

3. Redis Sets

set is used to put unique values in redis. eg- ip address of all the customers visiting the website.
It will not add the value again with the same key.

SADD
SREMS
SISMEMBER
SINTER
SCARD

4. Hashmap

HSET
HGET
HMGET
HINCRBY

5. Sorted Set
Here all the datas will be added but will associated with a weightage and it will store the sorted way w.r.t that weightage

ZADD 

>> zadd score 1 Sumit

>> zrevrange score 0 -1

6. Streams

It is used to store real time data, where we want to capture the data for every seconds like- User click behaviour, sensor monitoring

7. Geospatial



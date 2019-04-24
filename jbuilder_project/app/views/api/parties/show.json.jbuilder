json.extract! @party, :name, :location

# json.guests do
#     @party.guests.each do |guest|
#         json.set! guest.id do
#             json.extract! guest, :name, :age
#             json.gifts do
#                 guest.gifts.each do |gift|
#                     json.set! gift.id do
#                         json.extract! gift, :title, :description
#                     end
#                 end
#             end
#         end
#     end
# end

json.guests do
    json.array! @party.guests do
        @party.guests.each do |guest|
            json.extract! guest, :name, :age
            json.gifts do
                json.array! guest.gifts, :title, :description
            end
        end
    end
end
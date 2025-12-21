FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Al estar el Dockerfile en la misma carpeta, el archivo .csproj está ahí mismo
COPY ["Huellitas.API.csproj", "./"]
RUN dotnet restore "Huellitas.API.csproj"

COPY . .
RUN dotnet publish "Huellitas.API.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "Huellitas.API.dll"]
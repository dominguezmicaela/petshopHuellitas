FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src


COPY . .


RUN dotnet restore $(find . -name "*.csproj" | grep "Huellitas.API.csproj")
RUN dotnet publish $(find . -name "*.csproj" | grep "Huellitas.API.csproj") -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "Huellitas.API.dll"]
// Importa as bibliotecas necessárias do React e do React Native
import React from "react";
import { View, Text } from "react-native";

// Importa o componente Avatar e os estilos específicos para este componente
import { Avatar } from "../Avatar";
import { styles } from "./styles";

// Importa o hook useAuth do arquivo de autenticação
import { useAuth } from "../../hooks/auth";

// Define o componente funcional Profile
export function Profile() {
  // Utiliza o hook useAuth para obter informações do usuário autenticado
  const { user } = useAuth();
  console.log("Dados do usuário:", user);

  // Renderiza o componente Profile
  return (
    <View style={styles.container}>
      {/* Renderiza o Avatar com a imagem do usuário */}
      <Avatar urlImage={user.avatar} />

      {/* Renderiza as informações do usuário */}
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        {/* Exibe uma mensagem personalizada */}
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  audit: {
    Tables: {
      record_version: {
        Row: {
          auth_role: string | null
          auth_uid: string | null
          id: number
          old_record: Json | null
          old_record_id: string | null
          op: Database["audit"]["Enums"]["operation"]
          record: Json | null
          record_id: string | null
          table_name: unknown
          table_oid: unknown
          table_schema: unknown
          ts: string
        }
        Insert: {
          auth_role?: string | null
          auth_uid?: string | null
          id?: number
          old_record?: Json | null
          old_record_id?: string | null
          op: Database["audit"]["Enums"]["operation"]
          record?: Json | null
          record_id?: string | null
          table_name: unknown
          table_oid: unknown
          table_schema: unknown
          ts?: string
        }
        Update: {
          auth_role?: string | null
          auth_uid?: string | null
          id?: number
          old_record?: Json | null
          old_record_id?: string | null
          op?: Database["audit"]["Enums"]["operation"]
          record?: Json | null
          record_id?: string | null
          table_name?: unknown
          table_oid?: unknown
          table_schema?: unknown
          ts?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      disable_tracking: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      enable_tracking: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      primary_key_columns: {
        Args: {
          entity_oid: unknown
        }
        Returns: unknown
      }
      to_record_id: {
        Args: {
          entity_oid: unknown
          pkey_cols: string[]
          rec: Json
        }
        Returns: string
      }
    }
    Enums: {
      operation: "INSERT" | "UPDATE" | "DELETE" | "TRUNCATE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  auth: {
    Tables: {
      audit_log_entries: {
        Row: {
          created_at: string | null
          id: string
          instance_id: string | null
          ip_address: string
          payload: Json | null
        }
        Insert: {
          created_at?: string | null
          id: string
          instance_id?: string | null
          ip_address?: string
          payload?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: string
          instance_id?: string | null
          ip_address?: string
          payload?: Json | null
        }
        Relationships: []
      }
      flow_state: {
        Row: {
          auth_code: string
          authentication_method: string
          code_challenge: string
          code_challenge_method: Database["auth"]["Enums"]["code_challenge_method"]
          created_at: string | null
          id: string
          provider_access_token: string | null
          provider_refresh_token: string | null
          provider_type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          auth_code: string
          authentication_method: string
          code_challenge: string
          code_challenge_method: Database["auth"]["Enums"]["code_challenge_method"]
          created_at?: string | null
          id: string
          provider_access_token?: string | null
          provider_refresh_token?: string | null
          provider_type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          auth_code?: string
          authentication_method?: string
          code_challenge?: string
          code_challenge_method?: Database["auth"]["Enums"]["code_challenge_method"]
          created_at?: string | null
          id?: string
          provider_access_token?: string | null
          provider_refresh_token?: string | null
          provider_type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      identities: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          identity_data: Json
          last_sign_in_at: string | null
          provider: string
          provider_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          identity_data: Json
          last_sign_in_at?: string | null
          provider: string
          provider_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          identity_data?: Json
          last_sign_in_at?: string | null
          provider?: string
          provider_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "identities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      instances: {
        Row: {
          created_at: string | null
          id: string
          raw_base_config: string | null
          updated_at: string | null
          uuid: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          raw_base_config?: string | null
          updated_at?: string | null
          uuid?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          raw_base_config?: string | null
          updated_at?: string | null
          uuid?: string | null
        }
        Relationships: []
      }
      mfa_amr_claims: {
        Row: {
          authentication_method: string
          created_at: string
          id: string
          session_id: string
          updated_at: string
        }
        Insert: {
          authentication_method: string
          created_at: string
          id: string
          session_id: string
          updated_at: string
        }
        Update: {
          authentication_method?: string
          created_at?: string
          id?: string
          session_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mfa_amr_claims_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          }
        ]
      }
      mfa_challenges: {
        Row: {
          created_at: string
          factor_id: string
          id: string
          ip_address: unknown
          verified_at: string | null
        }
        Insert: {
          created_at: string
          factor_id: string
          id: string
          ip_address: unknown
          verified_at?: string | null
        }
        Update: {
          created_at?: string
          factor_id?: string
          id?: string
          ip_address?: unknown
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mfa_challenges_auth_factor_id_fkey"
            columns: ["factor_id"]
            isOneToOne: false
            referencedRelation: "mfa_factors"
            referencedColumns: ["id"]
          }
        ]
      }
      mfa_factors: {
        Row: {
          created_at: string
          factor_type: Database["auth"]["Enums"]["factor_type"]
          friendly_name: string | null
          id: string
          secret: string | null
          status: Database["auth"]["Enums"]["factor_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at: string
          factor_type: Database["auth"]["Enums"]["factor_type"]
          friendly_name?: string | null
          id: string
          secret?: string | null
          status: Database["auth"]["Enums"]["factor_status"]
          updated_at: string
          user_id: string
        }
        Update: {
          created_at?: string
          factor_type?: Database["auth"]["Enums"]["factor_type"]
          friendly_name?: string | null
          id?: string
          secret?: string | null
          status?: Database["auth"]["Enums"]["factor_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mfa_factors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      refresh_tokens: {
        Row: {
          created_at: string | null
          id: number
          instance_id: string | null
          parent: string | null
          revoked: boolean | null
          session_id: string | null
          token: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          instance_id?: string | null
          parent?: string | null
          revoked?: boolean | null
          session_id?: string | null
          token?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          instance_id?: string | null
          parent?: string | null
          revoked?: boolean | null
          session_id?: string | null
          token?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "refresh_tokens_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "sessions"
            referencedColumns: ["id"]
          }
        ]
      }
      saml_providers: {
        Row: {
          attribute_mapping: Json | null
          created_at: string | null
          entity_id: string
          id: string
          metadata_url: string | null
          metadata_xml: string
          sso_provider_id: string
          updated_at: string | null
        }
        Insert: {
          attribute_mapping?: Json | null
          created_at?: string | null
          entity_id: string
          id: string
          metadata_url?: string | null
          metadata_xml: string
          sso_provider_id: string
          updated_at?: string | null
        }
        Update: {
          attribute_mapping?: Json | null
          created_at?: string | null
          entity_id?: string
          id?: string
          metadata_url?: string | null
          metadata_xml?: string
          sso_provider_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "saml_providers_sso_provider_id_fkey"
            columns: ["sso_provider_id"]
            isOneToOne: false
            referencedRelation: "sso_providers"
            referencedColumns: ["id"]
          }
        ]
      }
      saml_relay_states: {
        Row: {
          created_at: string | null
          flow_state_id: string | null
          for_email: string | null
          from_ip_address: unknown | null
          id: string
          redirect_to: string | null
          request_id: string
          sso_provider_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          flow_state_id?: string | null
          for_email?: string | null
          from_ip_address?: unknown | null
          id: string
          redirect_to?: string | null
          request_id: string
          sso_provider_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          flow_state_id?: string | null
          for_email?: string | null
          from_ip_address?: unknown | null
          id?: string
          redirect_to?: string | null
          request_id?: string
          sso_provider_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "saml_relay_states_flow_state_id_fkey"
            columns: ["flow_state_id"]
            isOneToOne: false
            referencedRelation: "flow_state"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saml_relay_states_sso_provider_id_fkey"
            columns: ["sso_provider_id"]
            isOneToOne: false
            referencedRelation: "sso_providers"
            referencedColumns: ["id"]
          }
        ]
      }
      schema_migrations: {
        Row: {
          version: string
        }
        Insert: {
          version: string
        }
        Update: {
          version?: string
        }
        Relationships: []
      }
      sessions: {
        Row: {
          aal: Database["auth"]["Enums"]["aal_level"] | null
          created_at: string | null
          factor_id: string | null
          id: string
          ip: unknown | null
          not_after: string | null
          refreshed_at: string | null
          tag: string | null
          updated_at: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          aal?: Database["auth"]["Enums"]["aal_level"] | null
          created_at?: string | null
          factor_id?: string | null
          id: string
          ip?: unknown | null
          not_after?: string | null
          refreshed_at?: string | null
          tag?: string | null
          updated_at?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          aal?: Database["auth"]["Enums"]["aal_level"] | null
          created_at?: string | null
          factor_id?: string | null
          id?: string
          ip?: unknown | null
          not_after?: string | null
          refreshed_at?: string | null
          tag?: string | null
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      sso_domains: {
        Row: {
          created_at: string | null
          domain: string
          id: string
          sso_provider_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          domain: string
          id: string
          sso_provider_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          domain?: string
          id?: string
          sso_provider_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sso_domains_sso_provider_id_fkey"
            columns: ["sso_provider_id"]
            isOneToOne: false
            referencedRelation: "sso_providers"
            referencedColumns: ["id"]
          }
        ]
      }
      sso_providers: {
        Row: {
          created_at: string | null
          id: string
          resource_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          resource_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          resource_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          aud: string | null
          banned_until: string | null
          confirmation_sent_at: string | null
          confirmation_token: string | null
          confirmed_at: string | null
          created_at: string | null
          deleted_at: string | null
          email: string | null
          email_change: string | null
          email_change_confirm_status: number | null
          email_change_sent_at: string | null
          email_change_token_current: string | null
          email_change_token_new: string | null
          email_confirmed_at: string | null
          encrypted_password: string | null
          id: string
          instance_id: string | null
          invited_at: string | null
          is_sso_user: boolean
          is_super_admin: boolean | null
          last_sign_in_at: string | null
          phone: string | null
          phone_change: string | null
          phone_change_sent_at: string | null
          phone_change_token: string | null
          phone_confirmed_at: string | null
          raw_app_meta_data: Json | null
          raw_user_meta_data: Json | null
          reauthentication_sent_at: string | null
          reauthentication_token: string | null
          recovery_sent_at: string | null
          recovery_token: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          aud?: string | null
          banned_until?: string | null
          confirmation_sent_at?: string | null
          confirmation_token?: string | null
          confirmed_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          email?: string | null
          email_change?: string | null
          email_change_confirm_status?: number | null
          email_change_sent_at?: string | null
          email_change_token_current?: string | null
          email_change_token_new?: string | null
          email_confirmed_at?: string | null
          encrypted_password?: string | null
          id: string
          instance_id?: string | null
          invited_at?: string | null
          is_sso_user?: boolean
          is_super_admin?: boolean | null
          last_sign_in_at?: string | null
          phone?: string | null
          phone_change?: string | null
          phone_change_sent_at?: string | null
          phone_change_token?: string | null
          phone_confirmed_at?: string | null
          raw_app_meta_data?: Json | null
          raw_user_meta_data?: Json | null
          reauthentication_sent_at?: string | null
          reauthentication_token?: string | null
          recovery_sent_at?: string | null
          recovery_token?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          aud?: string | null
          banned_until?: string | null
          confirmation_sent_at?: string | null
          confirmation_token?: string | null
          confirmed_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          email?: string | null
          email_change?: string | null
          email_change_confirm_status?: number | null
          email_change_sent_at?: string | null
          email_change_token_current?: string | null
          email_change_token_new?: string | null
          email_confirmed_at?: string | null
          encrypted_password?: string | null
          id?: string
          instance_id?: string | null
          invited_at?: string | null
          is_sso_user?: boolean
          is_super_admin?: boolean | null
          last_sign_in_at?: string | null
          phone?: string | null
          phone_change?: string | null
          phone_change_sent_at?: string | null
          phone_change_token?: string | null
          phone_confirmed_at?: string | null
          raw_app_meta_data?: Json | null
          raw_user_meta_data?: Json | null
          reauthentication_sent_at?: string | null
          reauthentication_token?: string | null
          recovery_sent_at?: string | null
          recovery_token?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      email: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      jwt: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uid: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      aal_level: "aal1" | "aal2" | "aal3"
      code_challenge_method: "s256" | "plain"
      factor_status: "unverified" | "verified"
      factor_type: "totp" | "webauthn"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      addresses: {
        Row: {
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          id: string
          landmark: string | null
          owner_id: string | null
          street: string | null
          updated_at: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          id?: string
          landmark?: string | null
          owner_id?: string | null
          street?: string | null
          updated_at?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          id?: string
          landmark?: string | null
          owner_id?: string | null
          street?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "addresses_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "addresses_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "addresses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          }
        ]
      }
      advances: {
        Row: {
          advance_request_id: string | null
          advance_type_id: string
          amount: number | null
          bank_account_id: string | null
          created_at: string
          created_by: string
          date_of_payment: string | null
          date_of_receipt: string | null
          employee_id: string | null
          id: string
          installments: number | null
          notes: string | null
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          advance_request_id?: string | null
          advance_type_id: string
          amount?: number | null
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          date_of_payment?: string | null
          date_of_receipt?: string | null
          employee_id?: string | null
          id?: string
          installments?: number | null
          notes?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          advance_request_id?: string | null
          advance_type_id?: string
          amount?: number | null
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          date_of_payment?: string | null
          date_of_receipt?: string | null
          employee_id?: string | null
          id?: string
          installments?: number | null
          notes?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "advances_advance_request_id_fkey"
            columns: ["advance_request_id"]
            isOneToOne: false
            referencedRelation: "request_advances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advances_advance_type_id_fkey"
            columns: ["advance_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advances_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advances_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advances_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advances_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advances_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      allowances: {
        Row: {
          allowance_type_id: string
          bank_account_id: string | null
          created_at: string
          created_by: string
          date_of_received: string | null
          employee_id: string | null
          id: string
          notes: string | null
          owner_id: string
          request_allowances_id: string | null
          suggested_amount: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          allowance_type_id: string
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          date_of_received?: string | null
          employee_id?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          request_allowances_id?: string | null
          suggested_amount?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          allowance_type_id?: string
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          date_of_received?: string | null
          employee_id?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          request_allowances_id?: string | null
          suggested_amount?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "allowances_allowance_type_id_fkey"
            columns: ["allowance_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "allowances_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "allowances_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "allowances_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "allowances_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "allowances_request_allowances_id_fkey"
            columns: ["request_allowances_id"]
            isOneToOne: false
            referencedRelation: "request_allowances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "allowances_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      bank_accounts: {
        Row: {
          bank_id: string
          created_at: string
          created_by: string
          employee_id: string
          iban: string
          id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          bank_id: string
          created_at?: string
          created_by?: string
          employee_id: string
          iban: string
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          bank_id?: string
          created_at?: string
          created_by?: string
          employee_id?: string
          iban?: string
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_accounts_bank_id_fkey"
            columns: ["bank_id"]
            isOneToOne: false
            referencedRelation: "banks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bank_accounts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bank_accounts_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bank_accounts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      banks: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: Json
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name: Json
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: Json
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "banks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "banks_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "banks_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      base_call_for_action: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          title: string
          type: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "base_call_for_action_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "base_call_for_action_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "base_call_for_action_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      base_complaints: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "base_complaints_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "base_complaints_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "base_complaints_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      base_proposals: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "base_proposals_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "base_proposals_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "base_proposals_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      base_requests: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "base_requests_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "base_requests_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "base_requests_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      beneficiaries: {
        Row: {
          created_at: string
          created_by: string
          date_of_birth: string | null
          id: string
          name: string
          owner_id: string
          type: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          id?: string
          name: string
          owner_id?: string
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          id?: string
          name?: string
          owner_id?: string
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "beneficiaries_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "beneficiaries_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "beneficiaries_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      bonuses: {
        Row: {
          amount: number | null
          bank_account_id: string | null
          bonus_request_id: string | null
          bonus_type_id: string
          created_at: string
          created_by: string
          employee_id: string | null
          id: string
          note: string | null
          owner_id: string
          reason: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          bank_account_id?: string | null
          bonus_request_id?: string | null
          bonus_type_id: string
          created_at?: string
          created_by?: string
          employee_id?: string | null
          id?: string
          note?: string | null
          owner_id?: string
          reason?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          bank_account_id?: string | null
          bonus_request_id?: string | null
          bonus_type_id?: string
          created_at?: string
          created_by?: string
          employee_id?: string | null
          id?: string
          note?: string | null
          owner_id?: string
          reason?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bonuses_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bonuses_bonus_request_id_fkey"
            columns: ["bonus_request_id"]
            isOneToOne: false
            referencedRelation: "request_bonuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bonuses_bonus_type_id_fkey"
            columns: ["bonus_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bonuses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bonuses_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bonuses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bonuses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      brokers: {
        Row: {
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          id: string
          landmark: string | null
          name: string | null
          owner_id: string
          phone: string | null
          street: string | null
          terms_and_conditions: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          terms_and_conditions?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          terms_and_conditions?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brokers_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brokers_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brokers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brokers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brokers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      certifications: {
        Row: {
          created_at: string
          created_by: string
          credential_number: string | null
          credential_url: string | null
          date_of_expiry: string | null
          date_of_issue: string
          employee_id: string
          id: string
          issuing_organization: string
          level: string | null
          name: string
          owner_id: string
          specialization: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          credential_number?: string | null
          credential_url?: string | null
          date_of_expiry?: string | null
          date_of_issue: string
          employee_id: string
          id?: string
          issuing_organization: string
          level?: string | null
          name: string
          owner_id?: string
          specialization: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          credential_number?: string | null
          credential_url?: string | null
          date_of_expiry?: string | null
          date_of_issue?: string
          employee_id?: string
          id?: string
          issuing_organization?: string
          level?: string | null
          name?: string
          owner_id?: string
          specialization?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "certifications_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certifications_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certifications_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certifications_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      commissions: {
        Row: {
          amount: number | null
          commission_request_id: string | null
          commission_type_id: string
          created_at: string
          created_by: string
          employee_id: string | null
          id: string
          note: string | null
          owner_id: string
          reason: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          commission_request_id?: string | null
          commission_type_id: string
          created_at?: string
          created_by?: string
          employee_id?: string | null
          id?: string
          note?: string | null
          owner_id?: string
          reason?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          commission_request_id?: string | null
          commission_type_id?: string
          created_at?: string
          created_by?: string
          employee_id?: string | null
          id?: string
          note?: string | null
          owner_id?: string
          reason?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commissions_commission_request_id_fkey"
            columns: ["commission_request_id"]
            isOneToOne: false
            referencedRelation: "request_commissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commissions_commission_type_id_fkey"
            columns: ["commission_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commissions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commissions_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commissions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commissions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      compensations: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compensations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compensations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compensations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      complaint_financial: {
        Row: {
          amount: number | null
          created_at: string
          created_by: string
          financial_complaint_type_id: string | null
          id: string
          notes: string | null
          owner_id: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          created_by?: string
          financial_complaint_type_id?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          created_by?: string
          financial_complaint_type_id?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "complaint_financial_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "complaint_financial_financial_complaint_type_id_fkey"
            columns: ["financial_complaint_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "complaint_financial_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "complaint_financial_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      complaints: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          notes: string | null
          owner_id: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "complaints_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "complaints_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "complaints_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      contact_information: {
        Row: {
          created_at: string
          email: string | null
          employee_name: string | null
          id: string
          owner_id: string | null
          phone: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          owner_id?: string | null
          phone?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          owner_id?: string | null
          phone?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_information_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_information_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      contracts: {
        Row: {
          benefits: string | null
          compensation_type_id: string | null
          contract_type_id: string
          created_at: string
          created_by: string
          date_of_start: string | null
          duties: string | null
          employee_id: string
          id: string
          insurance: boolean | null
          job_title_id: string | null
          maximum_retirement_renewal_age: number | null
          owner_id: string
          period: number | null
          probation_period: number | null
          recruitment_agencies_id: string | null
          responsibilities: string | null
          retirement_age: number | null
          retirement_renewal_period: number | null
          salary: number | null
          updated_at: string | null
          updated_by: string | null
          work_hour_id: string | null
        }
        Insert: {
          benefits?: string | null
          compensation_type_id?: string | null
          contract_type_id: string
          created_at?: string
          created_by?: string
          date_of_start?: string | null
          duties?: string | null
          employee_id: string
          id?: string
          insurance?: boolean | null
          job_title_id?: string | null
          maximum_retirement_renewal_age?: number | null
          owner_id?: string
          period?: number | null
          probation_period?: number | null
          recruitment_agencies_id?: string | null
          responsibilities?: string | null
          retirement_age?: number | null
          retirement_renewal_period?: number | null
          salary?: number | null
          updated_at?: string | null
          updated_by?: string | null
          work_hour_id?: string | null
        }
        Update: {
          benefits?: string | null
          compensation_type_id?: string | null
          contract_type_id?: string
          created_at?: string
          created_by?: string
          date_of_start?: string | null
          duties?: string | null
          employee_id?: string
          id?: string
          insurance?: boolean | null
          job_title_id?: string | null
          maximum_retirement_renewal_age?: number | null
          owner_id?: string
          period?: number | null
          probation_period?: number | null
          recruitment_agencies_id?: string | null
          responsibilities?: string | null
          retirement_age?: number | null
          retirement_renewal_period?: number | null
          salary?: number | null
          updated_at?: string | null
          updated_by?: string | null
          work_hour_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_compensation_type_id_fkey"
            columns: ["compensation_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_contract_type_id_fkey"
            columns: ["contract_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_job_title_id_fkey"
            columns: ["job_title_id"]
            isOneToOne: false
            referencedRelation: "job_titles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_recruitment_agencies_id_fkey"
            columns: ["recruitment_agencies_id"]
            isOneToOne: false
            referencedRelation: "recruitment_agencies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_work_hour_id_fkey"
            columns: ["work_hour_id"]
            isOneToOne: false
            referencedRelation: "work_hours"
            referencedColumns: ["id"]
          }
        ]
      }
      deductions: {
        Row: {
          amount: number | null
          created_at: string
          created_by: string
          deduction_type_id: string
          employee_id: string | null
          id: string
          note: string | null
          owner_id: string
          reason: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          created_by?: string
          deduction_type_id: string
          employee_id?: string | null
          id?: string
          note?: string | null
          owner_id?: string
          reason?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          created_by?: string
          deduction_type_id?: string
          employee_id?: string | null
          id?: string
          note?: string | null
          owner_id?: string
          reason?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deductions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deductions_deduction_type_id_fkey"
            columns: ["deduction_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deductions_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deductions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deductions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      departments: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          entity_id: string
          id: string
          name: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          entity_id: string
          id?: string
          name: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          entity_id?: string
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "departments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      driver_licenses: {
        Row: {
          blood_type_id: string
          created_at: string
          created_by: string
          date_of_expiry: string | null
          date_of_issue: string | null
          employee_id: string
          id: string
          license_number: string | null
          owner_id: string
          type: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          blood_type_id: string
          created_at?: string
          created_by?: string
          date_of_expiry?: string | null
          date_of_issue?: string | null
          employee_id: string
          id?: string
          license_number?: string | null
          owner_id?: string
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          blood_type_id?: string
          created_at?: string
          created_by?: string
          date_of_expiry?: string | null
          date_of_issue?: string | null
          employee_id?: string
          id?: string
          license_number?: string | null
          owner_id?: string
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "driver_licenses_blood_type_id_fkey"
            columns: ["blood_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "driver_licenses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "driver_licenses_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: true
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "driver_licenses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "driver_licenses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      emergency_contacts: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string
          id: string
          name: string
          owner_id: string
          phone: string
          relation_type_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id: string
          id?: string
          name: string
          owner_id?: string
          phone: string
          relation_type_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string
          id?: string
          name?: string
          owner_id?: string
          phone?: string
          relation_type_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "emergency_contacts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emergency_contacts_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: true
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emergency_contacts_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emergency_contacts_relation_type_id_fkey"
            columns: ["relation_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emergency_contacts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      employee_reports: {
        Row: {
          answers: Json
          created_at: string
          created_by: string
          employee_id: string
          id: string
          owner_id: string
          quarter: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          answers: Json
          created_at?: string
          created_by?: string
          employee_id: string
          id?: string
          owner_id?: string
          quarter?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          answers?: Json
          created_at?: string
          created_by?: string
          employee_id?: string
          id?: string
          owner_id?: string
          quarter?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_reports_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_reports_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_reports_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_reports_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      employees: {
        Row: {
          building: string | null
          city_id: string | null
          city_of_birth_id: string | null
          country_id: string | null
          country_of_birth_id: string | null
          created_at: string
          date_of_birth: string | null
          date_of_hiring: string | null
          date_of_termination: string | null
          full_name: string | null
          gender: Database["public"]["Enums"]["genders"] | null
          id: string
          image_id: string | null
          insurance_plan_id: string | null
          landmark: string | null
          phone: string | null
          preferences: Json
          sponsor_id: string | null
          street: string | null
          updated_at: string | null
          updated_by: string | null
          username: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          city_of_birth_id?: string | null
          country_id?: string | null
          country_of_birth_id?: string | null
          created_at?: string
          date_of_birth?: string | null
          date_of_hiring?: string | null
          date_of_termination?: string | null
          full_name?: string | null
          gender?: Database["public"]["Enums"]["genders"] | null
          id: string
          image_id?: string | null
          insurance_plan_id?: string | null
          landmark?: string | null
          phone?: string | null
          preferences?: Json
          sponsor_id?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          username?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          city_of_birth_id?: string | null
          country_id?: string | null
          country_of_birth_id?: string | null
          created_at?: string
          date_of_birth?: string | null
          date_of_hiring?: string | null
          date_of_termination?: string | null
          full_name?: string | null
          gender?: Database["public"]["Enums"]["genders"] | null
          id?: string
          image_id?: string | null
          insurance_plan_id?: string | null
          landmark?: string | null
          phone?: string | null
          preferences?: Json
          sponsor_id?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_city_of_birth_id_fkey"
            columns: ["city_of_birth_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_country_of_birth_id_fkey"
            columns: ["country_of_birth_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_insurance_plan_id_fkey"
            columns: ["insurance_plan_id"]
            isOneToOne: false
            referencedRelation: "insurance_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_sponsor_id_fkey"
            columns: ["sponsor_id"]
            isOneToOne: false
            referencedRelation: "sponsors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      entities: {
        Row: {
          activity: string | null
          building: string | null
          ceo_id: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          entity_type_id: string
          established: number | null
          id: string
          landmark: string | null
          logo_id: string | null
          name: string
          nationality_id: string | null
          parent_id: string | null
          phone: string | null
          slogan: string | null
          street: string | null
          tax_number: string | null
          trading_number: string | null
          type: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
          children: unknown | null
        }
        Insert: {
          activity?: string | null
          building?: string | null
          ceo_id?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          entity_type_id: string
          established?: number | null
          id?: string
          landmark?: string | null
          logo_id?: string | null
          name: string
          nationality_id?: string | null
          parent_id?: string | null
          phone?: string | null
          slogan?: string | null
          street?: string | null
          tax_number?: string | null
          trading_number?: string | null
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          activity?: string | null
          building?: string | null
          ceo_id?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          entity_type_id?: string
          established?: number | null
          id?: string
          landmark?: string | null
          logo_id?: string | null
          name?: string
          nationality_id?: string | null
          parent_id?: string | null
          phone?: string | null
          slogan?: string | null
          street?: string | null
          tax_number?: string | null
          trading_number?: string | null
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "entities_ceo_id_fkey"
            columns: ["ceo_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_entity_type_id_fkey"
            columns: ["entity_type_id"]
            isOneToOne: false
            referencedRelation: "entity_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_logo_id_fkey"
            columns: ["logo_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_logo_id_fkey"
            columns: ["logo_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_nationality_id_fkey"
            columns: ["nationality_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      entity_types: {
        Row: {
          category: string
          created_at: string
          created_by: string
          description: string | null
          id: string
          level: Database["public"]["Enums"]["entity_level"]
          name: Json
          slug: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          category?: string
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          level: Database["public"]["Enums"]["entity_level"]
          name: Json
          slug?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          level?: Database["public"]["Enums"]["entity_level"]
          name?: Json
          slug?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "entity_types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entity_types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      expenses: {
        Row: {
          amount: number
          created_at: string
          created_by: string
          expense_type_id: string
          id: string
          owner_id: string
          request_expense_id: string | null
          title: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          created_by?: string
          expense_type_id: string
          id?: string
          owner_id?: string
          request_expense_id?: string | null
          title: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          created_by?: string
          expense_type_id?: string
          id?: string
          owner_id?: string
          request_expense_id?: string | null
          title?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_expense_type_id_fkey"
            columns: ["expense_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_request_expense_id_fkey"
            columns: ["request_expense_id"]
            isOneToOne: false
            referencedRelation: "request_expenses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      factories: {
        Row: {
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          id: string
          landmark: string | null
          name: string
          owner_id: string
          phone: string | null
          production_capacity: number | null
          quality_control_and_testing: string | null
          street: string | null
          terms_of_contract: string | null
          updated_at: string | null
          updated_by: string | null
          warranty_and_return_policy: string | null
          website: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name: string
          owner_id?: string
          phone?: string | null
          production_capacity?: number | null
          quality_control_and_testing?: string | null
          street?: string | null
          terms_of_contract?: string | null
          updated_at?: string | null
          updated_by?: string | null
          warranty_and_return_policy?: string | null
          website?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string
          owner_id?: string
          phone?: string | null
          production_capacity?: number | null
          quality_control_and_testing?: string | null
          street?: string | null
          terms_of_contract?: string | null
          updated_at?: string | null
          updated_by?: string | null
          warranty_and_return_policy?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "factories_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factories_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factories_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factories_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factories_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      factory_branches: {
        Row: {
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          factory_id: string | null
          id: string
          landmark: string | null
          name: string | null
          owner_id: string
          phone: string | null
          street: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          factory_id?: string | null
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          factory_id?: string | null
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "factory_branches_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factory_branches_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factory_branches_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factory_branches_factory_id_fkey"
            columns: ["factory_id"]
            isOneToOne: false
            referencedRelation: "factories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factory_branches_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "factory_branches_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      feedback: {
        Row: {
          created_at: string
          created_by: string
          id: string
          negative_feedback: string | null
          owner_id: string
          positive_feedback: string | null
          rating: number
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          negative_feedback?: string | null
          owner_id?: string
          positive_feedback?: string | null
          rating: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          negative_feedback?: string | null
          owner_id?: string
          positive_feedback?: string | null
          rating?: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feedback_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feedback_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      health_conditions: {
        Row: {
          created_at: string
          created_by: string
          health_condition_type_id: string
          id: string
          name: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          health_condition_type_id: string
          id?: string
          name: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          health_condition_type_id?: string
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "health_conditions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "health_conditions_health_condition_type_id_fkey"
            columns: ["health_condition_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "health_conditions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "health_conditions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      health_reports: {
        Row: {
          answers: Json
          created_at: string
          created_by: string
          id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
          year: number
        }
        Insert: {
          answers: Json
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
          year: number
        }
        Update: {
          answers?: Json
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "health_reports_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "health_reports_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "health_reports_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      healthcare_service_providers: {
        Row: {
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          id: string
          landmark: string | null
          name: string
          owner_id: string
          phone: string | null
          service_provider_type:
            | Database["public"]["Enums"]["healthcare_provider_types"]
            | null
          service_type:
            | Database["public"]["Enums"]["healthcare_service_types"]
            | null
          street: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name: string
          owner_id?: string
          phone?: string | null
          service_provider_type?:
            | Database["public"]["Enums"]["healthcare_provider_types"]
            | null
          service_type?:
            | Database["public"]["Enums"]["healthcare_service_types"]
            | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string
          owner_id?: string
          phone?: string | null
          service_provider_type?:
            | Database["public"]["Enums"]["healthcare_provider_types"]
            | null
          service_type?:
            | Database["public"]["Enums"]["healthcare_service_types"]
            | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "healthcare_service_providers_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "healthcare_service_providers_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "healthcare_service_providers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "healthcare_service_providers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "healthcare_service_providers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      identification_cards: {
        Row: {
          back_image_id: string | null
          created_at: string
          created_by: string
          date_of_expiry: string | null
          date_of_issue: string | null
          employee_id: string
          front_image_id: string | null
          id: string
          id_number: string | null
          job_title: string | null
          owner_id: string
          place_of_issue_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          back_image_id?: string | null
          created_at?: string
          created_by?: string
          date_of_expiry?: string | null
          date_of_issue?: string | null
          employee_id: string
          front_image_id?: string | null
          id?: string
          id_number?: string | null
          job_title?: string | null
          owner_id?: string
          place_of_issue_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          back_image_id?: string | null
          created_at?: string
          created_by?: string
          date_of_expiry?: string | null
          date_of_issue?: string | null
          employee_id?: string
          front_image_id?: string | null
          id?: string
          id_number?: string | null
          job_title?: string | null
          owner_id?: string
          place_of_issue_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "identification_cards_back_image_id_fkey"
            columns: ["back_image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "identification_cards_back_image_id_fkey"
            columns: ["back_image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "identification_cards_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "identification_cards_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: true
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "identification_cards_front_image_id_fkey"
            columns: ["front_image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "identification_cards_front_image_id_fkey"
            columns: ["front_image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "identification_cards_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "identification_cards_place_of_issue_id_fkey"
            columns: ["place_of_issue_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "identification_cards_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      images: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          object_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          object_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          object_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "images_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "images_object_id_fkey"
            columns: ["object_id"]
            isOneToOne: false
            referencedRelation: "objects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "images_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "images_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      insurance_companies: {
        Row: {
          active: boolean
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          emergency_contacts: string | null
          employee_name: string | null
          id: string
          landmark: string | null
          logo_id: string | null
          name: string | null
          owner_id: string
          phone: string | null
          street: string | null
          tax_number: string | null
          trading_number: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          active?: boolean
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          emergency_contacts?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          logo_id?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          tax_number?: string | null
          trading_number?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          active?: boolean
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          emergency_contacts?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          logo_id?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          tax_number?: string | null
          trading_number?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_companies_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_companies_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_companies_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_companies_logo_id_fkey"
            columns: ["logo_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_companies_logo_id_fkey"
            columns: ["logo_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_companies_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_companies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      insurance_offer_plans: {
        Row: {
          created_at: string
          created_by: string
          id: string
          insurance_offer_id: string
          name: string
          owner_id: string
          system_insurance_plan_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          insurance_offer_id: string
          name: string
          owner_id?: string
          system_insurance_plan_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          insurance_offer_id?: string
          name?: string
          owner_id?: string
          system_insurance_plan_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_offer_plans_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_offer_plans_insurance_offer_id_fkey"
            columns: ["insurance_offer_id"]
            isOneToOne: false
            referencedRelation: "insurance_offers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_offer_plans_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_offer_plans_system_insurance_plan_id_fkey"
            columns: ["system_insurance_plan_id"]
            isOneToOne: false
            referencedRelation: "system_insurance_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_offer_plans_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      insurance_offers: {
        Row: {
          created_at: string
          created_by: string
          id: string
          insurance_company_id: string | null
          name: string | null
          notes: string | null
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          insurance_company_id?: string | null
          name?: string | null
          notes?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          insurance_company_id?: string | null
          name?: string | null
          notes?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_offers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_offers_insurance_company_id_fkey"
            columns: ["insurance_company_id"]
            isOneToOne: false
            referencedRelation: "insurance_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_offers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_offers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      insurance_plan_additions: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_plan_additions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_plan_additions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_plan_additions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      insurance_plans: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string
          offer_plan_id: string | null
          owner_id: string
          system_insurance_plan_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name: string
          offer_plan_id?: string | null
          owner_id?: string
          system_insurance_plan_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string
          offer_plan_id?: string | null
          owner_id?: string
          system_insurance_plan_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "insurance_plans_offer_plan_id_fkey"
            columns: ["offer_plan_id"]
            isOneToOne: false
            referencedRelation: "insurance_offer_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_plans_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_plans_system_insurance_plan_id_fkey"
            columns: ["system_insurance_plan_id"]
            isOneToOne: false
            referencedRelation: "system_insurance_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_plans_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      insurance_reports: {
        Row: {
          answers: Json
          created_at: string
          created_by: string
          id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
          year: number
        }
        Insert: {
          answers: Json
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
          year: number
        }
        Update: {
          answers?: Json
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "insurance_reports_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_reports_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "insurance_reports_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      job_titles: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: Json | null
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name?: Json | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: Json | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_titles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_titles_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_titles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_broker_feedback: {
        Row: {
          broker_id: string
          created_at: string
          created_by: string
          feedback_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          broker_id: string
          created_at?: string
          created_by?: string
          feedback_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          broker_id?: string
          created_at?: string
          created_by?: string
          feedback_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_broker_feedback_broker_id_fkey"
            columns: ["broker_id"]
            isOneToOne: false
            referencedRelation: "brokers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_broker_feedback_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_broker_feedback_feedback_id_fkey"
            columns: ["feedback_id"]
            isOneToOne: false
            referencedRelation: "feedback"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_broker_feedback_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_broker_feedback_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_certification_documents: {
        Row: {
          certification_id: string
          created_at: string
          created_by: string
          image_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          certification_id: string
          created_at?: string
          created_by?: string
          image_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          certification_id?: string
          created_at?: string
          created_by?: string
          image_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_certification_documents_certification_id_fkey"
            columns: ["certification_id"]
            isOneToOne: false
            referencedRelation: "certifications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_certification_documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_certification_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_certification_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_certification_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_certification_documents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_department_employees: {
        Row: {
          created_at: string
          created_by: string
          department_id: string
          employee_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          department_id: string
          employee_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          department_id?: string
          employee_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_department_employees_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_department_employees_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_department_employees_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_department_employees_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_department_employees_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_employee_documents: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string
          image_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id: string
          image_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string
          image_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_employee_documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_documents_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_documents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_employee_health_conditions: {
        Row: {
          condition_id: string
          created_at: string
          created_by: string
          employee_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          condition_id: string
          created_at?: string
          created_by?: string
          employee_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          condition_id?: string
          created_at?: string
          created_by?: string
          employee_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_employee_health_conditions_condition_id_fkey"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "health_conditions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_health_conditions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_health_conditions_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_health_conditions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_health_conditions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_employee_nationalities: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string
          nationality_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id: string
          nationality_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string
          nationality_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_employee_nationalities_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_nationalities_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_nationalities_nationality_id_fkey"
            columns: ["nationality_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_nationalities_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_employee_nationalities_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_entity_employees: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string
          entity_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id: string
          entity_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string
          entity_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_entity_employees_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_entity_employees_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_entity_employees_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_entity_employees_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_entity_employees_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_expense_documents: {
        Row: {
          created_at: string
          created_by: string
          expense_id: string
          image_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          expense_id: string
          image_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          expense_id?: string
          image_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_expense_documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_expense_documents_expense_id_fkey"
            columns: ["expense_id"]
            isOneToOne: false
            referencedRelation: "expenses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_expense_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_expense_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_expense_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_expense_documents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_factory_countries: {
        Row: {
          created_at: string
          created_by: string
          factory_id: string
          owner_id: string
          res_country_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          factory_id: string
          owner_id?: string
          res_country_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          factory_id?: string
          owner_id?: string
          res_country_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_factory_countries_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_factory_countries_factory_id_fkey"
            columns: ["factory_id"]
            isOneToOne: false
            referencedRelation: "factories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_factory_countries_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_factory_countries_res_country_id_fkey"
            columns: ["res_country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_factory_countries_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_factory_feedback: {
        Row: {
          created_at: string
          created_by: string
          factory_id: string
          feedback_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          factory_id: string
          feedback_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          factory_id?: string
          feedback_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_factory_feedback_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_factory_feedback_factory_id_fkey"
            columns: ["factory_id"]
            isOneToOne: false
            referencedRelation: "factories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_factory_feedback_feedback_id_fkey"
            columns: ["feedback_id"]
            isOneToOne: false
            referencedRelation: "feedback"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_factory_feedback_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_factory_feedback_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_health_condition_documents: {
        Row: {
          condition_id: string
          created_at: string
          created_by: string
          image_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          condition_id: string
          created_at?: string
          created_by?: string
          image_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          condition_id?: string
          created_at?: string
          created_by?: string
          image_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_health_condition_documents_condition_id_fkey"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "health_conditions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_documents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_health_condition_medications: {
        Row: {
          condition_id: string
          created_at: string
          created_by: string
          medication_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          condition_id: string
          created_at?: string
          created_by?: string
          medication_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          condition_id?: string
          created_at?: string
          created_by?: string
          medication_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_health_condition_medications_condition_id_fkey"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "health_conditions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_medications_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_medications_medication_id_fkey"
            columns: ["medication_id"]
            isOneToOne: false
            referencedRelation: "medications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_medications_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_health_condition_medications_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_insurance_company_feedback: {
        Row: {
          created_at: string
          created_by: string
          feedback_id: string
          insurance_company_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          feedback_id: string
          insurance_company_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          feedback_id?: string
          insurance_company_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_insurance_company_feedback_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_insurance_company_feedback_feedback_id_fkey"
            columns: ["feedback_id"]
            isOneToOne: false
            referencedRelation: "feedback"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_insurance_company_feedback_insurance_company_id_fkey"
            columns: ["insurance_company_id"]
            isOneToOne: false
            referencedRelation: "insurance_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_insurance_company_feedback_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_insurance_company_feedback_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_insurance_company_insurance_types: {
        Row: {
          created_at: string
          created_by: string
          insurance_company_id: string
          insurance_type_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          insurance_company_id: string
          insurance_type_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          insurance_company_id?: string
          insurance_type_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_insurance_company_insurance_types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_insurance_company_insurance_types_insurance_company_id_fke"
            columns: ["insurance_company_id"]
            isOneToOne: false
            referencedRelation: "insurance_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_insurance_company_insurance_types_insurance_type_id_fkey"
            columns: ["insurance_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_insurance_company_insurance_types_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_insurance_company_insurance_types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_marriage_documents: {
        Row: {
          created_at: string
          created_by: string
          image_id: string
          marriage_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          image_id: string
          marriage_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          image_id?: string
          marriage_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_marriage_documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_documents_marriage_id_fkey"
            columns: ["marriage_id"]
            isOneToOne: false
            referencedRelation: "marriages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_documents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_marriage_kids: {
        Row: {
          created_at: string
          created_by: string
          kid_id: string
          marriage_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          kid_id: string
          marriage_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          kid_id?: string
          marriage_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_marriage_kids_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_kids_kid_id_fkey"
            columns: ["kid_id"]
            isOneToOne: false
            referencedRelation: "kids"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_kids_marriage_id_fkey"
            columns: ["marriage_id"]
            isOneToOne: false
            referencedRelation: "marriages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_kids_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_marriage_kids_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_offer_plan_providers: {
        Row: {
          created_at: string
          created_by: string
          healthcare_service_provider_id: string
          insurance_offer_plan_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          healthcare_service_provider_id: string
          insurance_offer_plan_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          healthcare_service_provider_id?: string
          insurance_offer_plan_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_offer_plan_providers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_offer_plan_providers_healthcare_service_provider_id_fkey"
            columns: ["healthcare_service_provider_id"]
            isOneToOne: false
            referencedRelation: "healthcare_service_providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_offer_plan_providers_insurance_offer_plan_id_fkey"
            columns: ["insurance_offer_plan_id"]
            isOneToOne: false
            referencedRelation: "insurance_offer_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_offer_plan_providers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_offer_plan_providers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_product_documents: {
        Row: {
          created_at: string
          created_by: string
          image_id: string
          owner_id: string
          product_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          image_id: string
          owner_id?: string
          product_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          image_id?: string
          owner_id?: string
          product_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_product_documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_documents_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_documents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_product_product_categories: {
        Row: {
          created_at: string
          created_by: string
          owner_id: string
          product_category_id: string
          product_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          owner_id?: string
          product_category_id: string
          product_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          owner_id?: string
          product_category_id?: string
          product_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_product_product_categories_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_product_categories_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_product_categories_product_category_id_fkey"
            columns: ["product_category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_product_categories_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_product_categories_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_product_product_type_attribute_values: {
        Row: {
          created_at: string
          created_by: string
          owner_id: string
          product_id: string
          product_type_attribute_value_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          owner_id?: string
          product_id: string
          product_type_attribute_value_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          owner_id?: string
          product_id?: string
          product_type_attribute_value_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_product_product_type_attribute_values_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_product_type_attribute_values_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_product_type_attribute_values_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_product_type_attribute_values_product_type_attribu"
            columns: ["product_type_attribute_value_id"]
            isOneToOne: false
            referencedRelation: "product_type_attribute_values"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_product_type_attribute_values_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_product_warehouses: {
        Row: {
          created_at: string
          created_by: string
          owner_id: string
          product_id: string
          updated_at: string | null
          updated_by: string | null
          warehouse_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          owner_id?: string
          product_id: string
          updated_at?: string | null
          updated_by?: string | null
          warehouse_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          owner_id?: string
          product_id?: string
          updated_at?: string | null
          updated_by?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "join_product_warehouses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_warehouses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_warehouses_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_warehouses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_product_warehouses_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          }
        ]
      }
      join_provider_type: {
        Row: {
          created_at: string
          created_by: string
          healthcare_provider_id: string
          healthcare_type_id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          healthcare_provider_id: string
          healthcare_type_id: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          healthcare_provider_id?: string
          healthcare_type_id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_provider_type_healthcare_provider_id_fkey"
            columns: ["healthcare_provider_id"]
            isOneToOne: false
            referencedRelation: "healthcare_service_providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_provider_type_healthcare_type_id_fkey"
            columns: ["healthcare_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_provider_type_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_provider_type_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_relative_documents: {
        Row: {
          created_at: string
          created_by: string
          image_id: string
          owner_id: string
          relative_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          image_id: string
          owner_id?: string
          relative_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          image_id?: string
          owner_id?: string
          relative_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_relative_documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_documents_relative_id_fkey"
            columns: ["relative_id"]
            isOneToOne: false
            referencedRelation: "relatives"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_documents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_relative_health_conditions: {
        Row: {
          condition_id: string
          created_at: string
          created_by: string
          owner_id: string
          relative_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          condition_id: string
          created_at?: string
          created_by?: string
          owner_id?: string
          relative_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          condition_id?: string
          created_at?: string
          created_by?: string
          owner_id?: string
          relative_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_relative_health_conditions_condition_id_fkey"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "health_conditions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_health_conditions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_health_conditions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_health_conditions_relative_id_fkey"
            columns: ["relative_id"]
            isOneToOne: false
            referencedRelation: "relatives"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_relative_health_conditions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_request_documents: {
        Row: {
          created_at: string
          created_by: string
          image_id: string
          owner_id: string
          request_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          image_id: string
          owner_id?: string
          request_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          image_id?: string
          owner_id?: string
          request_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_request_documents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_request_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_request_documents_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_request_documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_request_documents_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "base_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_request_documents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_role_employees: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string
          owner_id: string
          role_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id: string
          owner_id?: string
          role_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string
          owner_id?: string
          role_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_role_employees_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_role_employees_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_role_employees_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_role_employees_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_role_employees_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_ship_line_ports: {
        Row: {
          created_at: string
          created_by: string
          owner_id: string
          port_id: string
          ship_line_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          owner_id?: string
          port_id: string
          ship_line_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          owner_id?: string
          port_id?: string
          ship_line_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_ship_line_ports_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_ship_line_ports_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_ship_line_ports_port_id_fkey"
            columns: ["port_id"]
            isOneToOne: false
            referencedRelation: "ports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_ship_line_ports_ship_line_id_fkey"
            columns: ["ship_line_id"]
            isOneToOne: false
            referencedRelation: "ship_lines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_ship_line_ports_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_shipping_company_countries: {
        Row: {
          created_at: string
          created_by: string
          owner_id: string
          res_country_id: string
          shipping_company_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          owner_id?: string
          res_country_id: string
          shipping_company_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          owner_id?: string
          res_country_id?: string
          shipping_company_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_shipping_company_countries_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_shipping_company_countries_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_shipping_company_countries_res_country_id_fkey"
            columns: ["res_country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_shipping_company_countries_shipping_company_id_fkey"
            columns: ["shipping_company_id"]
            isOneToOne: false
            referencedRelation: "shipping_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_shipping_company_countries_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_training_trainees: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string
          owner_id: string
          training_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id: string
          owner_id?: string
          training_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string
          owner_id?: string
          training_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_training_trainees_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_training_trainees_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_training_trainees_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_training_trainees_training_id_fkey"
            columns: ["training_id"]
            isOneToOne: false
            referencedRelation: "trainings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_training_trainees_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      join_training_trainers: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string
          owner_id: string
          training_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id: string
          owner_id?: string
          training_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string
          owner_id?: string
          training_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "join_training_trainers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_training_trainers_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_training_trainers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_training_trainers_training_id_fkey"
            columns: ["training_id"]
            isOneToOne: false
            referencedRelation: "trainings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "join_training_trainers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      jsonschema_validators: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          owner_id: string
          schema: Json
          schema_name: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          owner_id?: string
          schema: Json
          schema_name: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          owner_id?: string
          schema?: Json
          schema_name?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jsonschema_validators_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jsonschema_validators_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jsonschema_validators_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      kids: {
        Row: {
          created_at: string
          created_by: string
          date_of_birth: string | null
          gender: Database["public"]["Enums"]["genders"]
          id: string
          name: string
          owner_id: string
          type: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          gender: Database["public"]["Enums"]["genders"]
          id?: string
          name: string
          owner_id?: string
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          gender?: Database["public"]["Enums"]["genders"]
          id?: string
          name?: string
          owner_id?: string
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kids_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kids_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kids_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      marriages: {
        Row: {
          certificate_number: string | null
          created_at: string
          created_by: string
          date_of_marriage: string
          date_of_separation: string | null
          employee_id: string
          id: string
          notes: string | null
          owner_id: string
          separation_reason:
            | Database["public"]["Enums"]["separation_reasons"]
            | null
          spouse_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          certificate_number?: string | null
          created_at?: string
          created_by?: string
          date_of_marriage: string
          date_of_separation?: string | null
          employee_id: string
          id?: string
          notes?: string | null
          owner_id?: string
          separation_reason?:
            | Database["public"]["Enums"]["separation_reasons"]
            | null
          spouse_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          certificate_number?: string | null
          created_at?: string
          created_by?: string
          date_of_marriage?: string
          date_of_separation?: string | null
          employee_id?: string
          id?: string
          notes?: string | null
          owner_id?: string
          separation_reason?:
            | Database["public"]["Enums"]["separation_reasons"]
            | null
          spouse_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marriages_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marriages_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marriages_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marriages_spouse_id_fkey"
            columns: ["spouse_id"]
            isOneToOne: false
            referencedRelation: "spouses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marriages_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      medications: {
        Row: {
          created_at: string
          created_by: string
          dose: number | null
          id: string
          name: string
          owner_id: string
          recurrent: boolean | null
          updated_at: string | null
          updated_by: string | null
          weeks: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          dose?: number | null
          id?: string
          name: string
          owner_id?: string
          recurrent?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
          weeks?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string
          dose?: number | null
          id?: string
          name?: string
          owner_id?: string
          recurrent?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
          weeks?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "medications_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medications_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medications_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      options: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
          validator: Json | null
          value: Json | null
          version: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
          validator?: Json | null
          value?: Json | null
          version?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
          validator?: Json | null
          value?: Json | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "options_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "options_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "options_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      passports: {
        Row: {
          created_at: string
          created_by: string
          date_of_expiry: string | null
          date_of_issue: string | null
          employee_id: string
          id: string
          job_title: string | null
          owner_id: string
          place_of_issue_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_expiry?: string | null
          date_of_issue?: string | null
          employee_id: string
          id?: string
          job_title?: string | null
          owner_id?: string
          place_of_issue_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_expiry?: string | null
          date_of_issue?: string | null
          employee_id?: string
          id?: string
          job_title?: string | null
          owner_id?: string
          place_of_issue_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "passports_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "passports_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: true
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "passports_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "passports_place_of_issue_id_fkey"
            columns: ["place_of_issue_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "passports_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      payroll_deductions: {
        Row: {
          amount: string | null
          created_at: string
          created_by: string
          id: string
          owner_id: string
          payroll_deduction_type_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: string | null
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string
          payroll_deduction_type_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: string | null
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string
          payroll_deduction_type_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payroll_deductions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_deductions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_deductions_payroll_deduction_type_id_fkey"
            columns: ["payroll_deduction_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payroll_deductions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      policies: {
        Row: {
          annual_vacation: number | null
          benefits: string | null
          created_at: string
          created_by: string
          death_vacation: number | null
          id: string
          marriage_vacation: number | null
          maternal_vacation: number | null
          nda: string | null
          owner_id: string
          parental_vacation: number | null
          sick_vacation: number | null
          transportation: string | null
          updated_at: string | null
          updated_by: string | null
          work_days: string | null
          work_hours_id: string | null
        }
        Insert: {
          annual_vacation?: number | null
          benefits?: string | null
          created_at?: string
          created_by?: string
          death_vacation?: number | null
          id?: string
          marriage_vacation?: number | null
          maternal_vacation?: number | null
          nda?: string | null
          owner_id?: string
          parental_vacation?: number | null
          sick_vacation?: number | null
          transportation?: string | null
          updated_at?: string | null
          updated_by?: string | null
          work_days?: string | null
          work_hours_id?: string | null
        }
        Update: {
          annual_vacation?: number | null
          benefits?: string | null
          created_at?: string
          created_by?: string
          death_vacation?: number | null
          id?: string
          marriage_vacation?: number | null
          maternal_vacation?: number | null
          nda?: string | null
          owner_id?: string
          parental_vacation?: number | null
          sick_vacation?: number | null
          transportation?: string | null
          updated_at?: string | null
          updated_by?: string | null
          work_days?: string | null
          work_hours_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "policies_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "policies_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "policies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "policies_work_hours_id_fkey"
            columns: ["work_hours_id"]
            isOneToOne: false
            referencedRelation: "work_hours"
            referencedColumns: ["id"]
          }
        ]
      }
      ports: {
        Row: {
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          id: string
          name: string | null
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ports_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ports_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ports_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ports_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ports_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      product_brands: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_brands_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_brands_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_brands_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      product_categories: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string | null
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_categories_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_categories_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_categories_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      product_tags: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string | null
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_tags_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_tags_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_tags_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      product_type_attribute_values: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string
          owner_id: string
          product_type_attribute_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name: string
          owner_id?: string
          product_type_attribute_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          product_type_attribute_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_type_attribute_values_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_type_attribute_values_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_type_attribute_values_product_type_attribute_id_fkey"
            columns: ["product_type_attribute_id"]
            isOneToOne: false
            referencedRelation: "product_type_attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_type_attribute_values_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      product_type_attributes: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string
          owner_id: string
          product_type_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name: string
          owner_id?: string
          product_type_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          product_type_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_type_attributes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_type_attributes_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_type_attributes_product_type_id_fkey"
            columns: ["product_type_id"]
            isOneToOne: false
            referencedRelation: "product_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_type_attributes_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      product_types: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_types_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string | null
          owner_id: string
          price: string | null
          product_type_id: string
          short_description: string | null
          sku: string | null
          slug: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string | null
          owner_id?: string
          price?: string | null
          product_type_id: string
          short_description?: string | null
          sku?: string | null
          slug?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string | null
          owner_id?: string
          price?: string | null
          product_type_id?: string
          short_description?: string | null
          sku?: string | null
          slug?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_product_type_id_fkey"
            columns: ["product_type_id"]
            isOneToOne: false
            referencedRelation: "product_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      proposal_urgents: {
        Row: {
          created_at: string
          created_by: string
          date_of_urgent: string | null
          description: string | null
          id: string
          notes: string | null
          owner_id: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_urgent?: string | null
          description?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_urgent?: string | null
          description?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposal_urgents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposal_urgents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposal_urgents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      proposals: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          notes: string | null
          owner_id: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposals_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      recruitment_agencies: {
        Row: {
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          id: string
          landmark: string | null
          name: string
          owner_id: string | null
          phone: string | null
          street: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name: string
          owner_id?: string | null
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string
          owner_id?: string | null
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recruitment_agencies_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruitment_agencies_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruitment_agencies_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruitment_agencies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      relatives: {
        Row: {
          created_at: string
          created_by: string
          date_of_birth: string | null
          employee_id: string
          gender: Database["public"]["Enums"]["genders"] | null
          id: string
          name: string
          owner_id: string
          relation_types_id: string | null
          type: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          employee_id: string
          gender?: Database["public"]["Enums"]["genders"] | null
          id?: string
          name: string
          owner_id?: string
          relation_types_id?: string | null
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          employee_id?: string
          gender?: Database["public"]["Enums"]["genders"] | null
          id?: string
          name?: string
          owner_id?: string
          relation_types_id?: string | null
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "relatives_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relatives_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relatives_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relatives_relation_types_id_fkey"
            columns: ["relation_types_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relatives_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_advances: {
        Row: {
          advance_type_id: string
          amount: number | null
          bank_account_id: string | null
          created_at: string
          created_by: string
          date_of_payment: string | null
          date_of_receipt: string | null
          id: string
          installments: number | null
          notes: string | null
          number_of_installments: number | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          advance_type_id: string
          amount?: number | null
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          date_of_payment?: string | null
          date_of_receipt?: string | null
          id?: string
          installments?: number | null
          notes?: string | null
          number_of_installments?: number | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          advance_type_id?: string
          amount?: number | null
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          date_of_payment?: string | null
          date_of_receipt?: string | null
          id?: string
          installments?: number | null
          notes?: string | null
          number_of_installments?: number | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_advances_advance_type_id_fkey"
            columns: ["advance_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_advances_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_advances_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_advances_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_advances_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_allowances: {
        Row: {
          allowance_type_id: string
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          suggested_amount: number | null
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          allowance_type_id: string
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          suggested_amount?: number | null
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          allowance_type_id?: string
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          suggested_amount?: number | null
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_allowances_allowance_type_id_fkey"
            columns: ["allowance_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_allowances_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_allowances_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_allowances_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_benefits: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_benefits_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_benefits_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_benefits_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_bonuses: {
        Row: {
          bank_account_id: string | null
          bonus_type_id: string
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          bank_account_id?: string | null
          bonus_type_id: string
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          bank_account_id?: string | null
          bonus_type_id?: string
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_bonuses_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_bonuses_bonus_type_id_fkey"
            columns: ["bonus_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_bonuses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_bonuses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_bonuses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_commissions: {
        Row: {
          commission_type_id: string | null
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          reason: string | null
          status: string
          suggested_amount: number | null
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          commission_type_id?: string | null
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          suggested_amount?: number | null
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          commission_type_id?: string | null
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          suggested_amount?: number | null
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_commissions_commission_type_id_fkey"
            columns: ["commission_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_commissions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_commissions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_commissions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_delegations: {
        Row: {
          created_at: string
          created_by: string
          from: string | null
          id: string
          notes: string | null
          owner_id: string
          reason: string | null
          status: string
          title: string
          to: string | null
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title?: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_delegations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_delegations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_delegations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_expenses: {
        Row: {
          amount: number | null
          created_at: string
          created_by: string
          expense_type_id: string | null
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          created_by?: string
          expense_type_id?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          created_by?: string
          expense_type_id?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_expenses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_expenses_expense_type_id_fkey"
            columns: ["expense_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_expenses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_expenses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_external_delegations: {
        Row: {
          created_at: string
          created_by: string
          destination: string | null
          from: string | null
          id: string
          notes: string | null
          owner_id: string
          reason: string | null
          status: string
          title: string
          to: string | null
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          destination?: string | null
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          destination?: string | null
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title?: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_external_delegations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_external_delegations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_external_delegations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_health_visits: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_health_visits_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_health_visits_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_health_visits_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_hirings: {
        Row: {
          candidate_name: string | null
          created_at: string
          created_by: string
          document_id: string | null
          id: string
          job_title_id: string | null
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          candidate_name?: string | null
          created_at?: string
          created_by?: string
          document_id?: string | null
          id?: string
          job_title_id?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          candidate_name?: string | null
          created_at?: string
          created_by?: string
          document_id?: string | null
          id?: string
          job_title_id?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_hirings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_hirings_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "image_storage_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_hirings_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_hirings_job_title_id_fkey"
            columns: ["job_title_id"]
            isOneToOne: false
            referencedRelation: "job_titles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_hirings_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_hirings_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_installments: {
        Row: {
          amount: number | null
          bank_account_id: string | null
          created_at: string
          created_by: string
          from: string | null
          id: string
          installment: number | null
          installment_type_id: string | null
          notes: string | null
          owner_id: string
          status: string
          title: string
          to: string | null
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          from?: string | null
          id?: string
          installment?: number | null
          installment_type_id?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          from?: string | null
          id?: string
          installment?: number | null
          installment_type_id?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_installments_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_installments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_installments_installment_type_id_fkey"
            columns: ["installment_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_installments_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_installments_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_insurance_additions: {
        Row: {
          created_at: string
          created_by: string
          id: string
          insurance_plan_addition_id: string | null
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          insurance_plan_addition_id?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          insurance_plan_addition_id?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_insurance_additions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_additions_insurance_plan_addition_id_fkey"
            columns: ["insurance_plan_addition_id"]
            isOneToOne: false
            referencedRelation: "insurance_plan_additions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_additions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_additions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_insurance_financial_returns: {
        Row: {
          amount: number | null
          bank_account_id: string | null
          created_at: string
          created_by: string
          date_of_service: string | null
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          date_of_service?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          bank_account_id?: string | null
          created_at?: string
          created_by?: string
          date_of_service?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_insurance_financial_returns_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_financial_returns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_financial_returns_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_financial_returns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_insurance_raises: {
        Row: {
          created_at: string
          created_by: string
          id: string
          new_plan_id: string
          notes: string | null
          old_plan_id: string
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          new_plan_id: string
          notes?: string | null
          old_plan_id: string
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          new_plan_id?: string
          notes?: string | null
          old_plan_id?: string
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_insurance_raises_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_raises_new_plan_id_fkey"
            columns: ["new_plan_id"]
            isOneToOne: false
            referencedRelation: "insurance_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_raises_old_plan_id_fkey"
            columns: ["old_plan_id"]
            isOneToOne: false
            referencedRelation: "insurance_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_raises_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_raises_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_insurance_updates: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_insurance_updates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_updates_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_insurance_updates_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_internal_delegations: {
        Row: {
          created_at: string
          created_by: string
          entity_id: string | null
          from: string | null
          id: string
          notes: string | null
          owner_id: string
          reason: string | null
          status: string
          title: string
          to: string | null
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          entity_id?: string | null
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          entity_id?: string | null
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title?: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_internal_delegations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_internal_delegations_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_internal_delegations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_internal_delegations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_payroll_deductions_cancels: {
        Row: {
          created_at: string
          created_by: string
          deduction_id: string
          id: string
          notes: string | null
          owner_id: string
          reason: string | null
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          deduction_id: string
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          deduction_id?: string
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_payroll_deductions_cancels_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_payroll_deductions_cancels_deduction_id_fkey"
            columns: ["deduction_id"]
            isOneToOne: false
            referencedRelation: "deductions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_payroll_deductions_cancels_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_payroll_deductions_cancels_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_permissions: {
        Row: {
          created_at: string
          created_by: string
          date_of_permission: string | null
          from: string | null
          id: string
          notes: string | null
          owner_id: string
          permission_type_id: string | null
          status: string
          title: string
          to: string | null
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_permission?: string | null
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          permission_type_id?: string | null
          status?: string
          title: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_permission?: string | null
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          permission_type_id?: string | null
          status?: string
          title?: string
          to?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_permissions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_permissions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_permissions_permission_type_id_fkey"
            columns: ["permission_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_permissions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_promotions: {
        Row: {
          created_at: string
          created_by: string
          id: string
          new_job_title_id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          new_job_title_id: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          new_job_title_id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_promotions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_promotions_new_job_title_id_fkey"
            columns: ["new_job_title_id"]
            isOneToOne: false
            referencedRelation: "job_titles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_promotions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_promotions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_punctuality_changes: {
        Row: {
          advances_id: string | null
          created_at: string
          created_by: string
          date_of_new_punctuality: string | null
          date_of_old_punctuality: string | null
          id: string
          notes: string | null
          owner_id: string
          punctuality_type_id: string | null
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          advances_id?: string | null
          created_at?: string
          created_by?: string
          date_of_new_punctuality?: string | null
          date_of_old_punctuality?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          punctuality_type_id?: string | null
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          advances_id?: string | null
          created_at?: string
          created_by?: string
          date_of_new_punctuality?: string | null
          date_of_old_punctuality?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          punctuality_type_id?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_punctuality_changes_advances_id_fkey"
            columns: ["advances_id"]
            isOneToOne: false
            referencedRelation: "advances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_punctuality_changes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_punctuality_changes_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_punctuality_changes_punctuality_type_id_fkey"
            columns: ["punctuality_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_punctuality_changes_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_purchases: {
        Row: {
          amount: number | null
          created_at: string
          created_by: string
          id: string
          name: string | null
          notes: string | null
          owner_id: string
          quantity: number | null
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          notes?: string | null
          owner_id?: string
          quantity?: number | null
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          notes?: string | null
          owner_id?: string
          quantity?: number | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_purchases_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_purchases_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_purchases_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_resignations: {
        Row: {
          created_at: string
          created_by: string
          date_of_effective_resignation: string | null
          id: string
          notes: string | null
          owner_id: string
          reason: string | null
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_effective_resignation?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_effective_resignation?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_resignations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_resignations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_resignations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_retirement_age_extensions: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          survey_answer_id: string | null
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          survey_answer_id?: string | null
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          survey_answer_id?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_retirement_age_extensions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_retirement_age_extensions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_retirement_age_extensions_survey_answer_id_fkey"
            columns: ["survey_answer_id"]
            isOneToOne: false
            referencedRelation: "survey_answers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_retirement_age_extensions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_salary_raises: {
        Row: {
          amount: number | null
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          reasons: string | null
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          reasons?: string | null
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          reasons?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_salary_raises_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_salary_raises_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_salary_raises_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_settlements: {
        Row: {
          amount: number | null
          created_at: string
          created_by: string
          date_of_settlement: string | null
          id: string
          notes: string | null
          owner_id: string
          settlement_type_id: string | null
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          created_by?: string
          date_of_settlement?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          settlement_type_id?: string | null
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          created_by?: string
          date_of_settlement?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          settlement_type_id?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_settlements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_settlements_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_settlements_settlement_type_id_fkey"
            columns: ["settlement_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_settlements_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_sponsorship_transfers: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          reason: string | null
          sponsor_id: string | null
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          sponsor_id?: string | null
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          sponsor_id?: string | null
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_sponsorship_transfers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_sponsorship_transfers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_sponsorship_transfers_sponsor_id_fkey"
            columns: ["sponsor_id"]
            isOneToOne: false
            referencedRelation: "sponsors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_sponsorship_transfers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_trainer_registrations: {
        Row: {
          created_at: string
          created_by: string
          entity_id: string | null
          id: string
          notes: string | null
          owner_id: string
          qualifications: string | null
          status: string
          title: string
          training_id: string | null
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          entity_id?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          qualifications?: string | null
          status?: string
          title: string
          training_id?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          entity_id?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          qualifications?: string | null
          status?: string
          title?: string
          training_id?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_trainer_registrations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_trainer_registrations_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_trainer_registrations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_trainer_registrations_training_id_fkey"
            columns: ["training_id"]
            isOneToOne: false
            referencedRelation: "trainings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_trainer_registrations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_training_additions: {
        Row: {
          created_at: string
          created_by: string
          from: string | null
          id: string
          notes: string | null
          owner_id: string
          reason: string | null
          status: string
          title: string
          to: string | null
          training_location: string | null
          training_type_id: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title: string
          to?: string | null
          training_location?: string | null
          training_type_id: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          from?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          reason?: string | null
          status?: string
          title?: string
          to?: string | null
          training_location?: string | null
          training_type_id?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_training_additions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_training_additions_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_training_additions_training_type_id_fkey"
            columns: ["training_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_training_additions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_training_bonuses: {
        Row: {
          created_at: string
          created_by: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          training_id: string | null
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          training_id?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          training_id?: string | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_training_bonuses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_training_bonuses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_training_bonuses_training_id_fkey"
            columns: ["training_id"]
            isOneToOne: false
            referencedRelation: "trainings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_training_bonuses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_transfers: {
        Row: {
          created_at: string
          created_by: string
          date_of_transfer: string | null
          entity: string | null
          id: string
          job_title: string | null
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_transfer?: string | null
          entity?: string | null
          id?: string
          job_title?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_transfer?: string | null
          entity?: string | null
          id?: string
          job_title?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_transfers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_transfers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_transfers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      request_vacations: {
        Row: {
          created_at: string
          created_by: string
          from: string
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          to: string
          type: string
          updated_at: string | null
          updated_by: string | null
          vacation_type_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          from: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          to: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
          vacation_type_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          from?: string
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          to?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
          vacation_type_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "request_vacations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_vacations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_vacations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_vacations_vacation_type_id_fkey"
            columns: ["vacation_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
      }
      request_work_hours_changes: {
        Row: {
          created_at: string
          created_by: string
          id: string
          new_work_hours_id: string | null
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          new_work_hours_id?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          new_work_hours_id?: string | null
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_work_hours_changes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_work_hours_changes_new_work_hours_id_fkey"
            columns: ["new_work_hours_id"]
            isOneToOne: false
            referencedRelation: "work_hours"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_work_hours_changes_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_work_hours_changes_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      requests: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          notes: string | null
          owner_id: string
          status: string
          title: string
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "requests_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requests_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requests_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      res_cities: {
        Row: {
          admin_name: string | null
          capital: string | null
          city_ascii: string | null
          country_id: string
          created_at: string
          id: string
          lat: number | null
          lng: number | null
          name: string | null
          population: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          admin_name?: string | null
          capital?: string | null
          city_ascii?: string | null
          country_id: string
          created_at?: string
          id?: string
          lat?: number | null
          lng?: number | null
          name?: string | null
          population?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          admin_name?: string | null
          capital?: string | null
          city_ascii?: string | null
          country_id?: string
          created_at?: string
          id?: string
          lat?: number | null
          lng?: number | null
          name?: string | null
          population?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "res_cities_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "res_cities_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      res_countries: {
        Row: {
          created_at: string
          currency_id: string | null
          id: string
          iso2: string
          iso3: string
          local_name: string | null
          name: string
          nationality: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          currency_id?: string | null
          id?: string
          iso2: string
          iso3: string
          local_name?: string | null
          name: string
          nationality?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          currency_id?: string | null
          id?: string
          iso2?: string
          iso3?: string
          local_name?: string | null
          name?: string
          nationality?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "res_countries_currency_id_fkey"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "res_currencies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "res_countries_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      res_currencies: {
        Row: {
          active: boolean
          created_at: string
          currency_subunit_label: string | null
          currency_unit_label: string
          decimal_places: number
          full_name: string | null
          id: string
          name: string
          position: string
          rounding: number
          symbol: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string
          currency_subunit_label?: string | null
          currency_unit_label: string
          decimal_places: number
          full_name?: string | null
          id?: string
          name: string
          position: string
          rounding: number
          symbol: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string
          currency_subunit_label?: string | null
          currency_unit_label?: string
          decimal_places?: number
          full_name?: string | null
          id?: string
          name?: string
          position?: string
          rounding?: number
          symbol?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "res_currencies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      residencies: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string | null
          from: string | null
          id: string
          issuer_id: string | null
          owner_id: string
          to: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id?: string | null
          from?: string | null
          id?: string
          issuer_id?: string | null
          owner_id?: string
          to?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string | null
          from?: string | null
          id?: string
          issuer_id?: string | null
          owner_id?: string
          to?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "residencies_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "residencies_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "residencies_issuer_id_fkey"
            columns: ["issuer_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "residencies_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "residencies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      roles: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string
          owner_id: string
          permissions: Json
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name: string
          owner_id?: string
          permissions?: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          permissions?: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roles_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      sara_cities: {
        Row: {
          country_id: string | null
          created_at: string
          id: string
          latitude: string | null
          longitude: string | null
          name: string | null
          state_id: string | null
          updated_at: string | null
          updated_by: string | null
          wikidataid: string | null
        }
        Insert: {
          country_id?: string | null
          created_at?: string
          id?: string
          latitude?: string | null
          longitude?: string | null
          name?: string | null
          state_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
          wikidataid?: string | null
        }
        Update: {
          country_id?: string | null
          created_at?: string
          id?: string
          latitude?: string | null
          longitude?: string | null
          name?: string | null
          state_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
          wikidataid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sara_cities_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "sara_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sara_cities_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "sara_states"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sara_cities_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      sara_countries: {
        Row: {
          capital_id: string | null
          created_at: string
          currency: string | null
          currency_name: string | null
          currency_symbol: string | null
          emoji: string | null
          emojiU: string | null
          id: string
          iso2: string | null
          iso3: string | null
          latitude: string | null
          longitude: string | null
          name: string | null
          nationality: string | null
          native: string | null
          numeric_code: string | null
          phone_code: string | null
          region_id: string | null
          sub_region_id: string | null
          timezones: Json | null
          tld: string | null
          translations: Json | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          capital_id?: string | null
          created_at?: string
          currency?: string | null
          currency_name?: string | null
          currency_symbol?: string | null
          emoji?: string | null
          emojiU?: string | null
          id?: string
          iso2?: string | null
          iso3?: string | null
          latitude?: string | null
          longitude?: string | null
          name?: string | null
          nationality?: string | null
          native?: string | null
          numeric_code?: string | null
          phone_code?: string | null
          region_id?: string | null
          sub_region_id?: string | null
          timezones?: Json | null
          tld?: string | null
          translations?: Json | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          capital_id?: string | null
          created_at?: string
          currency?: string | null
          currency_name?: string | null
          currency_symbol?: string | null
          emoji?: string | null
          emojiU?: string | null
          id?: string
          iso2?: string | null
          iso3?: string | null
          latitude?: string | null
          longitude?: string | null
          name?: string | null
          nationality?: string | null
          native?: string | null
          numeric_code?: string | null
          phone_code?: string | null
          region_id?: string | null
          sub_region_id?: string | null
          timezones?: Json | null
          tld?: string | null
          translations?: Json | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sara_countries_capital_id_fkey"
            columns: ["capital_id"]
            isOneToOne: false
            referencedRelation: "sara_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sara_countries_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "sara_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sara_countries_sub_region_id_fkey"
            columns: ["sub_region_id"]
            isOneToOne: false
            referencedRelation: "sara_sub_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sara_countries_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      sara_regions: {
        Row: {
          created_at: string
          id: string
          name: string | null
          translations: Json | null
          updated_at: string | null
          updated_by: string | null
          wikiDataId: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          translations?: Json | null
          updated_at?: string | null
          updated_by?: string | null
          wikiDataId?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          translations?: Json | null
          updated_at?: string | null
          updated_by?: string | null
          wikiDataId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sara_regions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      sara_states: {
        Row: {
          code: string | null
          country_id: string | null
          created_at: string
          id: string
          latitude: string | null
          longitude: string | null
          name: string | null
          type: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          code?: string | null
          country_id?: string | null
          created_at?: string
          id?: string
          latitude?: string | null
          longitude?: string | null
          name?: string | null
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          code?: string | null
          country_id?: string | null
          created_at?: string
          id?: string
          latitude?: string | null
          longitude?: string | null
          name?: string | null
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sara_states_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "sara_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sara_states_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      sara_sub_regions: {
        Row: {
          created_at: string
          id: string
          name: string | null
          region_id: string | null
          translations: Json | null
          updated_at: string | null
          updated_by: string | null
          wikiDataId: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          region_id?: string | null
          translations?: Json | null
          updated_at?: string | null
          updated_by?: string | null
          wikiDataId?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          region_id?: string | null
          translations?: Json | null
          updated_at?: string | null
          updated_by?: string | null
          wikiDataId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sara_sub_regions_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "sara_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sara_sub_regions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      ship_lines: {
        Row: {
          created_at: string
          created_by: string
          from_port_id: string | null
          id: string
          name: string | null
          owner_id: string
          to_port_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          from_port_id?: string | null
          id?: string
          name?: string | null
          owner_id?: string
          to_port_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          from_port_id?: string | null
          id?: string
          name?: string | null
          owner_id?: string
          to_port_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ship_lines_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ship_lines_from_port_id_fkey"
            columns: ["from_port_id"]
            isOneToOne: false
            referencedRelation: "ports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ship_lines_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ship_lines_to_port_id_fkey"
            columns: ["to_port_id"]
            isOneToOne: false
            referencedRelation: "ports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ship_lines_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      shipping_companies: {
        Row: {
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          id: string
          landmark: string | null
          name: string | null
          owner_id: string
          phone: string | null
          street: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipping_companies_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_companies_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_companies_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_companies_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_companies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      ships: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string | null
          number: string | null
          owner_id: string
          shipping_company_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          number?: string | null
          owner_id?: string
          shipping_company_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string | null
          number?: string | null
          owner_id?: string
          shipping_company_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ships_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ships_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ships_shipping_company_id_fkey"
            columns: ["shipping_company_id"]
            isOneToOne: false
            referencedRelation: "shipping_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ships_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      sponsors: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string | null
          entity_id: string | null
          id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id?: string | null
          entity_id?: string | null
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string | null
          entity_id?: string | null
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sponsors_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsors_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsors_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsors_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsors_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      spouses: {
        Row: {
          created_at: string
          created_by: string
          date_of_birth: string | null
          id: string
          name: string
          owner_id: string
          type: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          id?: string
          name: string
          owner_id?: string
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          date_of_birth?: string | null
          id?: string
          name?: string
          owner_id?: string
          type?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "spouses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spouses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spouses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      status_histories: {
        Row: {
          created_at: string
          created_by: string
          id: string
          message: string
          new_status: string
          old_status: string
          owner_id: string
          request_type: string
          request_uuid: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          message: string
          new_status: string
          old_status: string
          owner_id?: string
          request_type: string
          request_uuid: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          message?: string
          new_status?: string
          old_status?: string
          owner_id?: string
          request_type?: string
          request_uuid?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "status_histories_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_histories_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_histories_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      survey_answers: {
        Row: {
          answers: Json | null
          created_at: string
          created_by: string
          id: string
          owner_id: string | null
          responder_id: string | null
          status: string | null
          survey_id: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          answers?: Json | null
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string | null
          responder_id?: string | null
          status?: string | null
          survey_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          answers?: Json | null
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string | null
          responder_id?: string | null
          status?: string | null
          survey_id?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "survey_answers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_answers_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_answers_responder_id_fkey"
            columns: ["responder_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_answers_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_answers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      surveys: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string
          survey_schema: Json
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          name: string
          survey_schema: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string
          survey_schema?: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "surveys_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "surveys_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      system_insurance_plans: {
        Row: {
          created_at: string
          created_by: string
          id: string
          insurance_plan_id: string | null
          name: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          insurance_plan_id?: string | null
          name: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          insurance_plan_id?: string | null
          name?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "system_insurance_plans_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "system_insurance_plans_insurance_plan_id_fkey"
            columns: ["insurance_plan_id"]
            isOneToOne: false
            referencedRelation: "insurance_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "system_insurance_plans_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "system_insurance_plans_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      template: {
        Row: {
          created_at: string
          created_by: string
          id: string
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "template_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "template_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "template_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      trainings: {
        Row: {
          created_at: string
          created_by: string
          description: Json | null
          from: string | null
          id: string
          name: Json | null
          owner_id: string
          to: string | null
          training_type_id: string
          training_type_type_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: Json | null
          from?: string | null
          id?: string
          name?: Json | null
          owner_id?: string
          to?: string | null
          training_type_id: string
          training_type_type_id: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: Json | null
          from?: string | null
          id?: string
          name?: Json | null
          owner_id?: string
          to?: string | null
          training_type_id?: string
          training_type_type_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trainings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trainings_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trainings_training_type_id_fkey"
            columns: ["training_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trainings_training_type_type_id_fkey"
            columns: ["training_type_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trainings_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      types: {
        Row: {
          category: string
          created_at: string
          created_by: string
          id: string
          name: Json
          owner_id: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          category: string
          created_at?: string
          created_by?: string
          id?: string
          name: Json
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string
          id?: string
          name?: Json
          owner_id?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "types_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      vacations: {
        Row: {
          created_at: string
          created_by: string
          employee_id: string
          from: string
          id: string
          name: string
          owner_id: string
          request_vacation_id: string | null
          to: string
          updated_at: string | null
          updated_by: string | null
          vacation_type_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          employee_id: string
          from: string
          id?: string
          name: string
          owner_id?: string
          request_vacation_id?: string | null
          to: string
          updated_at?: string | null
          updated_by?: string | null
          vacation_type_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          employee_id?: string
          from?: string
          id?: string
          name?: string
          owner_id?: string
          request_vacation_id?: string | null
          to?: string
          updated_at?: string | null
          updated_by?: string | null
          vacation_type_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vacations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vacations_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vacations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vacations_request_vacation_id_fkey"
            columns: ["request_vacation_id"]
            isOneToOne: false
            referencedRelation: "request_vacations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vacations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vacations_vacation_type_id_fkey"
            columns: ["vacation_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
      }
      visas: {
        Row: {
          country_of_issue_id: string | null
          created_at: string
          created_by: string
          employee_id: string
          from: string | null
          id: string
          id_number: string | null
          owner_id: string
          to: string
          updated_at: string | null
          updated_by: string | null
          visa_type_id: string
        }
        Insert: {
          country_of_issue_id?: string | null
          created_at?: string
          created_by?: string
          employee_id: string
          from?: string | null
          id?: string
          id_number?: string | null
          owner_id?: string
          to: string
          updated_at?: string | null
          updated_by?: string | null
          visa_type_id: string
        }
        Update: {
          country_of_issue_id?: string | null
          created_at?: string
          created_by?: string
          employee_id?: string
          from?: string | null
          id?: string
          id_number?: string | null
          owner_id?: string
          to?: string
          updated_at?: string | null
          updated_by?: string | null
          visa_type_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "visas_country_of_issue_id_fkey"
            columns: ["country_of_issue_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visas_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visas_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visas_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visas_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visas_visa_type_id_fkey"
            columns: ["visa_type_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          }
        ]
      }
      warehouses: {
        Row: {
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          id: string
          landmark: string | null
          name: string | null
          owner_id: string
          phone: string | null
          street: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "warehouses_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "warehouses_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "warehouses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "warehouses_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "warehouses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      work_hours: {
        Row: {
          created_at: string
          created_by: string
          from: string
          id: string
          owner_id: string
          to: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          from: string
          id?: string
          owner_id?: string
          to: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          from?: string
          id?: string
          owner_id?: string
          to?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "work_hours_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_hours_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_hours_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      work_locations: {
        Row: {
          activity_types_id: string | null
          building: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          entity_id: string
          id: string
          landmark: string | null
          name: string | null
          owner_id: string
          phone: string | null
          street: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }
        Insert: {
          activity_types_id?: string | null
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          entity_id: string
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Update: {
          activity_types_id?: string | null
          building?: string | null
          city_id?: string | null
          country_id?: string | null
          created_at?: string
          created_by?: string
          email?: string | null
          employee_name?: string | null
          entity_id?: string
          id?: string
          landmark?: string | null
          name?: string | null
          owner_id?: string
          phone?: string | null
          street?: string | null
          updated_at?: string | null
          updated_by?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "work_locations_activity_types_id_fkey"
            columns: ["activity_types_id"]
            isOneToOne: false
            referencedRelation: "types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_locations_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "res_cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_locations_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "res_countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_locations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_locations_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_locations_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_locations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      database_structure: {
        Row: {
          columns: Json | null
          table_name: unknown | null
        }
        Relationships: []
      }
      image_storage_view: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string | null
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          updated_by: string | null
          version: string | null
        }
        Relationships: [
          {
            foreignKeyName: "images_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "images_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
      new_database_structure: {
        Row: {
          columns: Json | null
          table_name: unknown | null
        }
        Relationships: []
      }
    }
    Functions: {
      children: {
        Args: {
          "": unknown
        }
        Returns: {
          activity: string | null
          building: string | null
          ceo_id: string | null
          city_id: string | null
          country_id: string | null
          created_at: string
          created_by: string
          email: string | null
          employee_name: string | null
          entity_type_id: string
          established: number | null
          id: string
          landmark: string | null
          logo_id: string | null
          name: string
          nationality_id: string | null
          parent_id: string | null
          phone: string | null
          slogan: string | null
          street: string | null
          tax_number: string | null
          trading_number: string | null
          type: string | null
          updated_at: string | null
          updated_by: string | null
          website: string | null
        }[]
      }
      created_by: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      delete_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: string
      }
      get_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: Json
      }
      get_claims: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_my_claim: {
        Args: {
          claim: string
        }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_owner: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_claims_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      json_matches_schema: {
        Args: {
          schema: Json
          instance: Json
        }
        Returns: boolean
      }
      jsonb_matches_schema: {
        Args: {
          schema: Json
          instance: Json
        }
        Returns: boolean
      }
      jsonschema_is_valid: {
        Args: {
          schema: Json
        }
        Returns: boolean
      }
      jsonschema_validation_errors: {
        Args: {
          schema: Json
          instance: Json
        }
        Returns: unknown
      }
      set_claim: {
        Args: {
          uid: string
          claim: string
          value: Json
        }
        Returns: string
      }
      update_request_status: {
        Args: {
          record_id: string
          new_status_input: string
          change_message: string
        }
        Returns: undefined
      }
    }
    Enums: {
      entity_level: "administration" | "company" | "branch"
      genders: "male" | "female"
      healthcare_provider_types:
        | "hospital"
        | "pharmacy"
        | "clinic"
        | "laboratory"
        | "physical_therapy_center"
        | "radiology_center"
        | "dental_clinic"
        | "optical_center"
        | "specialized_medical_center"
        | "clinics_complex"
        | "medical_association"
      healthcare_service_types: "inpatient" | "outpatient" | "emergency"
      separation_reasons: "divorced" | "widowed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
